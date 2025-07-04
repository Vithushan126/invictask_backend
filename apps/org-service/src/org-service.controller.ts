import { Controller, Get } from '@nestjs/common';
import { OrgServiceService } from './org-service.service';

@Controller()
export class OrgServiceController {
  constructor(private readonly orgServiceService: OrgServiceService) {}

  @Get()
  getHello(): string {
    return this.orgServiceService.getHello();
  }
}
