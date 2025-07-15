// proxy.service.ts
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ProxyService {
  async forwardRequest(url: string, method: string, body: any, headers: any) {
    try {
      const result = await axios({
        url,
        method,
        data: body,
        headers,
      });
      return result;
    } catch (error) {
      console.error('Proxy error:', error.message);
      throw new HttpException(
        'Service unavailable or failed to respond',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }
}
