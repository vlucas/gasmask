import type StringDict from './types/StringDict';

export default class HttpResponse {
  getAllHeaders(): StringDict {
    return {};
  }

  getAs(contentType: string) {}

  getBlob() {}

  // Returns raw binary type
  getContent() {}

  getContentText(charset: string = 'utf-8'): string {
    return '';
  }

  getHeaders(): StringDict {
    return {};
  }

  getResponseCode(): number {
    return 0;
  }
}
