import { NestFactory } from '@nestjs/core';
import { ActivityServiceModule } from './activity-service.module';

async function bootstrap() {
  const app = await NestFactory.create(ActivityServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
