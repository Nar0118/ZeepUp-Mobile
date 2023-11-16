export enum Routes {
  ROOT = 'Root',
  ONBOARDING = 'Onboarding',
  ONBOARDING_FIRST = 'OnboardingFirst',
  ONBOARDING_SECOND = 'OnboardingSecond',
  AUTH = 'Auth',
  LOGIN = 'Login',
  SIGNUP = 'Signup',
  FORGOT_PASSWORD = 'ForgotPassword',
  VENDOR_AUTH = 'VendorAuth',
  VENDOR_LOGIN = 'VendorLogin',
  VENDOR_LOGIN_USER = 'VendorLoginUser',
  VENDOR_BUSINESS = 'VendorBusiness',
  ALLOW_NOTIFICATION = 'AllowNotification',
  ALLOW_LOCATION = 'AllowLocation',
  ALLOW_CAMERA = 'AllowCamera',
  EMAIL_VERIFY = 'EmailVerify',
}

export interface RootStackParamList {
  [key: string]: { id: number } | undefined;
}
