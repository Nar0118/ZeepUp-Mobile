import { BASE_API_URL, APP_ENV } from '@env';
import { AppEnvEnum } from '../enums/appEnv.enum';

export const env = {
  BASE_API_URL: 'https://zeepup-api.solicy.net/',
  APP_ENV: APP_ENV || AppEnvEnum.PROD,
};
