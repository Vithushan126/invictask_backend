import { Module } from '@nestjs/common';
import { ActivityServiceController } from './activity-service.controller';
import { ActivityServiceService } from './activity-service.service';

@Module({
  imports: [],
  controllers: [ActivityServiceController],
  providers: [ActivityServiceService],
})
export class ActivityServiceModule {}
