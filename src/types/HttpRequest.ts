import type StringDict from '../types/StringDict';

export default interface HttpRequest {
  url: string;
  contentType?: string;
  headers?: StringDict;
  method?: 'get' | 'delete' | 'patch' | 'post' | 'put';
  payload?: string;
  validateHttpsCertificates?: boolean;
  followRedirects?: boolean;
  muteHttpExceptions?: boolean;
  escaping?: boolean;
}
