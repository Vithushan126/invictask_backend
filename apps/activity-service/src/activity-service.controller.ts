import { Controller, Get } from '@nestjs/common';
import { ActivityServiceService } from './activity-service.service';

@Controller()
export class ActivityServiceController {
  constructor(private readonly activityServiceService: ActivityServiceService) {}

  @Get()
  getHello(): string {
    return this.activityServiceService.getHello();
  }
}
