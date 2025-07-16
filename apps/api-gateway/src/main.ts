import { NestFactory } from '@nestjs/core';
import { AppModule } from './api-gateway.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Use raw body for proxied routes
  app.use('/auth', express.raw({ type: '*/*' }));

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
  console.log("api gateway is running on port 3000");
}
bootstrap();
