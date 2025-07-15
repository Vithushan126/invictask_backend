// import { NestFactory } from '@nestjs/core';
// import { AuthModule } from './src/auth/auth.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AuthModule);
//   await app.listen(3001);
// }
// bootstrap();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}
bootstrap();
