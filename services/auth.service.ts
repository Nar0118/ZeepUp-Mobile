import { env } from '../constants/env';
import { AppEnvEnum } from '../enums/appEnv.enum';
import {
  IEmailVerify,
  IFacebookLogin,
  IForgotPassword,
  IForgotPasswordResponse,
  IGoogleLogin,
  ILogin,
  ILoginResponse,
  ILogout,
  IResendEmail,
  IResetPassword,
} from '../interfaces/auth.interface';
import { IRegisterFrom } from '../interfaces/registerForm.interface';
import { ISuccessResponse } from '../interfaces/successResponse.interface';
import { IUserResponse } from '../interfaces/user.interface';
import ApiBase, { ApiError } from './ApiBase';

const defaultUser: IUserResponse = {
  id: 0,
  name: 'test',
  email: 'test@test.com',
  email_verified_at: '',
  phone: '',
  country: '',
  state: '',
  city: '',
  zipcode: null,
  role: '',
  status: '',
  disable_restaurant: '',
  business_description: null,
  address: null,
  street_number: null,
  profile_photo_path: null,
  banner_photo_path: null,
  created_at: '',
  updated_at: '',
  profile_photo_url: '',
  ratings: [],
};
export class AuthService extends ApiBase<
  ILogin | IRegisterFrom | IForgotPassword | FormData | IGoogleLogin | IEmailVerify
> {
  public async login(body: ILogin): Promise<ILoginResponse | ApiError> {
    if (env.APP_ENV === AppEnvEnum.PROD) {
      return await this.postAsync<ILoginResponse>(body, 'auth/login');
    } else {
      return {
        success: true,
        user: defaultUser,
        token: '',
      };
    }
  }

  public async getMe(): Promise<IUserResponse | ApiError> {
    return await this.getAllAsync<IUserResponse>('user/me');
  }

  public async logout(): Promise<ILogout | ApiError> {
    return await this.getAllAsync<ILogout>('logout');
  }

  public async register(body: IRegisterFrom): Promise<ISuccessResponse | ApiError> {
    if (env.APP_ENV === AppEnvEnum.PROD) {
      return await this.postAsync<ISuccessResponse>(body, 'auth/register');
    } else {
      return {
        success: true,
        message: 'Register successfully!',
      };
    }
  }

  public async registerVendor(body: FormData): Promise<ISuccessResponse | ApiError> {
    if (env.APP_ENV === AppEnvEnum.PROD) {
      return await this.postAsync<ISuccessResponse>(body, 'auth/register/vendor', {
        'Content-Type': 'multipart/form-data',
      });
    } else {
      return {
        success: true,
        message: 'Register successfully!',
      };
    }
  }

  public async forgotPassword(body: IForgotPassword): Promise<IForgotPasswordResponse | ApiError> {
    if (env.APP_ENV === AppEnvEnum.PROD) {
      return await this.postAsync<IForgotPasswordResponse>(body, 'auth/forgot-password');
    } else {
      return {
        code: '123456',
        email: 'test@test.com',
      };
    }
  }

  public async googleLogin(body: IGoogleLogin): Promise<ILoginResponse | ApiError> {
    if (env.APP_ENV === AppEnvEnum.PROD) {
      return await this.postAsync<ILoginResponse>(body, 'auth/google');
    } else {
      return {
        success: true,
        user: defaultUser,
        token: '',
      };
    }
  }

  public async facebookLogin(body: IFacebookLogin): Promise<ILoginResponse | ApiError> {
    if (env.APP_ENV === AppEnvEnum.PROD) {
      return await this.postAsync<ILoginResponse>(body, 'auth/facebook');
    } else {
      return {
        success: true,
        user: defaultUser,
        token: '',
      };
    }
  }

  public async emailVerify(body: IEmailVerify): Promise<ILoginResponse | ApiError> {
    return await this.postAsync<ILoginResponse>(body, 'auth/email-verify');
  }

  public async resendEmail(body: IResendEmail): Promise<ISuccessResponse | ApiError> {
    return await this.postAsync<ISuccessResponse>(body, 'auth/resend-email');
  }

  public async resetPassword(body: IResetPassword): Promise<ILoginResponse | ApiError> {
    return await this.postAsync<ILoginResponse>(body, 'auth/reset-password');
  }
}
