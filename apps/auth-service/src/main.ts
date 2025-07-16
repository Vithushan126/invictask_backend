import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('AUTH_SERVICE_PORT') || 3001;

  // Allow JSON parsing normally in auth service
  app.use(bodyParser.json());

  await app.listen(port);
}
bootstrap();
