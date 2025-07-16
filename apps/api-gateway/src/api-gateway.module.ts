

import { Module } from '@nestjs/common';
import { AuthRoute } from './routes/auth.route';
import { ProxyService } from './services/proxy.service';

@Module({
  imports: [],
  controllers: [AuthRoute],
  providers: [ProxyService],
})
export class AppModule {}


