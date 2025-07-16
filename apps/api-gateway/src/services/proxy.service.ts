import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

export type Method = 'get' | 'post' | 'put' | 'delete' | 'patch' | 'head' | 'options';

@Injectable()
export class ProxyService {
  async forwardRequest(
    url: string,
    method: Method,
    body: any,
    headers: any,
  ) {
    try {
      const response = await axios({
        url,
        method,
        data: body, // should be raw buffer
        headers: {
          ...headers,
          'content-length': headers['content-length'],
        },
        timeout: 5000,
      });

      return {
        status: response.status,
        data: response.data,
      };
    } catch (error: any) {
      console.error('Proxy error:', error.message);

      if (error.response) {
        return {
          status: error.response.status,
          data: error.response.data,
        };
      }

      throw new HttpException(
        'Service unavailable or failed to respond',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }
}
