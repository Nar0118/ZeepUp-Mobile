import { ISuccessResponse } from './successResponse.interface';
import { IUserResponse } from './user.interface';

export interface ILogin {
  email: string;
  password: string;
}

export interface IForgotPassword extends Omit<ILogin, 'password'> {}

export interface ILoginResponse {
  success: boolean;
  user: IUserResponse;
  token: string;
}

export interface IForgotPasswordResponse {
  code: string;
  email: string;
}

export interface IGoogleLogin {
  token: string;
}

export interface IFacebookLogin extends IGoogleLogin {}

export interface ILogout extends ISuccessResponse {}

export interface IEmailVerify {
  code: string;
  email: string;
}

export interface IResetPassword extends IEmailVerify, ILogin {
  password_confirmation: string;
}

export interface IResendEmail extends Omit<ILogin, 'password'> {}
