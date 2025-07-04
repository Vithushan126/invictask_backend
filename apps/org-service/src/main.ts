import { NestFactory } from '@nestjs/core';
import { OrgServiceModule } from './org-service.module';

async function bootstrap() {
  const app = await NestFactory.create(OrgServiceModule);
  await app.listen(process.env.port ?? 3002);
}
bootstrap();
