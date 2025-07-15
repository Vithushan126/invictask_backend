import { Injectable } from '@nestjs/common';

@Injectable()
export class ActivityServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
