import { Injectable } from '@nestjs/common';

@Injectable()
export class OrgServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
