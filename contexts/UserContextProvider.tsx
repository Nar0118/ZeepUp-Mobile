import React, { createContext, PropsWithChildren, useContext, useState } from 'react';
import useAsyncEffect from 'use-async-effect';
import { AsyncStorageService } from '../services/asyncStorage.service';
import { IUser, UserRole } from '../interfaces/user.interface';
import { AuthService } from '../services/auth.service';

type UserContextType = {
  isAuth: boolean;
  user: IUser | null;
  role: UserRole;
  updateUser: (newUser: IUser | null, isAuth?: boolean, role?: UserRole) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};

const UserContextProvider = ({ children }: PropsWithChildren) => {
  const authService = new AuthService();

  const [user, setUser] = useState<{ isAuth: boolean; user: IUser | null; role: UserRole }>({
    isAuth: false,
    user: null,
    role: UserRole.VENDOR,
  });

  useAsyncEffect(async () => {
    const token = await AsyncStorageService.getItemAsync('accessToken');

    if (token) {
      const user = await authService.getMe();

      if ('status' in user && user.status == '401') {
        updateUser(null, false);

        await AsyncStorageService.removeItemAsync('accessToken');

        return;
      }

      updateUser(user as IUser, true, (user as IUser).role);
    }
  }, []);

  const updateUser = (newUser: IUser | null, isAuth = true, role = UserRole.BUYER): void => {
    setUser({
      user: newUser,
      isAuth,
      role,
    });
  };

  const contextValue: UserContextType = {
    ...user,
    updateUser,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider, useUserContext };
