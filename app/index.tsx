import React from 'react';
import { View, StatusBar } from 'react-native';
import { ToastProvider } from 'react-native-toast-notifications';
import Navigation from '../navigation';
import { UserContextProvider } from '../contexts/UserContextProvider';
import 'react-native-gesture-handler';
import { NavigationProvider } from '../contexts/NavigationContext';

const App = (): JSX.Element => {
  return (
    <NavigationProvider>
      <ToastProvider duration={2000} placement='top'>
        <UserContextProvider>
          <View style={{ flex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
            <StatusBar />
            <Navigation />
          </View>
        </UserContextProvider>
      </ToastProvider>
    </NavigationProvider>
  );
};

export default App;
