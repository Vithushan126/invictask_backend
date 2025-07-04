import { Module } from '@nestjs/common';
import { OrgServiceController } from './org-service.controller';
import { OrgServiceService } from './org-service.service';

@Module({
  imports: [],
  controllers: [OrgServiceController],
  providers: [OrgServiceService],
})
export class OrgServiceModule {}
