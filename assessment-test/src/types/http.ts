export interface ResponseInterface {
  success: boolean;
  data: any;
  totalRecords?: number;
  pagination?: any;
}
export interface Config {
  headers?: object;
  params?: object;
}
export interface Get {
  (url: string, config?: Config, hasAuth?: boolean): Promise<ResponseInterface>;
}

export interface Del {
  (url: string, config?: Config, hasAuth?: boolean): Promise<ResponseInterface>;
}

export interface Post {
  (url: string, reqBody: object, config?: Config, hasAuth?: boolean): Promise<ResponseInterface>;
}

export interface Put {
  (url: string, reqBody: object, config?: Config, hasAuth?: boolean): Promise<ResponseInterface>;
}
export interface Patch {
  (url: string, reqBody: object, config?: Config, hasAuth?: boolean): Promise<ResponseInterface>;
}
