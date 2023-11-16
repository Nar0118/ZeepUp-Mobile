import Axios, { AxiosHeaders, AxiosInstance, RawAxiosRequestHeaders } from 'axios';
import { env } from '../constants/env';
import { AsyncStorageService } from './asyncStorage.service';

type ID = number | string;

export interface ApiError {
  statusCode: number;
  errorMessage?: string;
}

export interface IApiBase<T> {
  getAllAsync: (url: string) => Promise<T[] | T | ApiError>;

  getAsync: (id: ID, url: string) => Promise<T | ApiError>;

  postAsync: (values: T, url: string) => Promise<T | ApiError>;

  putAsync: (id: ID, values: T, url: string) => Promise<T | ApiError>;

  putAllAsync(values: T, url: string): Promise<T | ApiError>;

  patchAllAsync(values: T, url: string): Promise<T | ApiError>;

  deleteAsync: (id: ID, url: string) => Promise<void | ApiError>;

  deleteAllAsync(values: T, url: string): Promise<T | ApiError>;
}

export default class ApiBase<T> implements IApiBase<T> {
  public static axiosInstance: AxiosInstance;
  protected baseApiUrl: string;

  constructor() {
    this.baseApiUrl = env.BASE_API_URL + 'api';
  }

  static createAxiosInstance(): void {
    ApiBase.axiosInstance = Axios.create({
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  }

  protected createError(e: unknown): ApiError {
    return {
      statusCode: e?.response?.status,
      errorMessage: e?.response?.data?.message || 'Server Error',
    };
  }

  public async getAllAsync<K>(url: string = this.baseApiUrl): Promise<K | ApiError> {
    try {
      const path = `${this.baseApiUrl}/${url}`;

      const { data } = await ApiBase.axiosInstance.get(path);

      return data;
    } catch (err) {
      return this.createError(err);
    }
  }

  public async getAsync<K>(id: ID, url: string = this.baseApiUrl): Promise<K | ApiError> {
    try {
      const path = `${this.baseApiUrl}/${url}`;

      const { data } = await ApiBase.axiosInstance.get(`${path}/${id}`);

      return data;
    } catch (err) {
      return this.createError(err);
    }
  }

  public async postAsync<K>(
    postData: T,
    url: string = this.baseApiUrl,
    headers?: RawAxiosRequestHeaders | AxiosHeaders,
  ): Promise<K | ApiError> {
    try {
      const path = `${this.baseApiUrl}/${url}`;

      const { data } = await ApiBase.axiosInstance.post(path, postData, {
        headers,
      });

      return data;
    } catch (err) {
      return this.createError(err);
    }
  }

  public async patchAllAsync<K>(postData: T, url: string = this.baseApiUrl): Promise<K | ApiError> {
    try {
      const path = `${this.baseApiUrl}/${url}`;

      const { data } = await ApiBase.axiosInstance.patch(path, postData);

      return data;
    } catch (err) {
      return this.createError(err);
    }
  }

  public async putAllAsync(postData: T, url: string = this.baseApiUrl): Promise<T | ApiError> {
    try {
      const { data } = await ApiBase.axiosInstance.put(`${url}`, postData);

      return data;
    } catch (err) {
      return this.createError(err);
    }
  }

  public async putAsync(id: ID, putData: T, url: string = this.baseApiUrl): Promise<T | ApiError> {
    try {
      const { data } = await ApiBase.axiosInstance.put(`${url}/${id}`, putData);

      return data;
    } catch (err) {
      return this.createError(err);
    }
  }

  public async deleteAsync(id: ID, url: string = this.baseApiUrl): Promise<void | ApiError> {
    try {
      const { data } = await ApiBase.axiosInstance.delete(`${url}/${id}`);

      return data;
    } catch (err) {
      return this.createError(err);
    }
  }

  public async deleteAllAsync(deleteData: T, url: string = this.baseApiUrl): Promise<T | ApiError> {
    try {
      const { data } = await ApiBase.axiosInstance.delete(`${url}`, {
        data: deleteData,
      });

      return data;
    } catch (err) {
      return this.createError(err);
    }
  }
}

ApiBase.createAxiosInstance();

ApiBase.axiosInstance.interceptors.request.use(async function (config) {
  const token = await AsyncStorageService.getItemAsync('accessToken');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
