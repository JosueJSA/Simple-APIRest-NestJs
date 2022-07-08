import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  const logger = new Logger();
  await app.listen(3000);
  logger.log(`Nest server is running ${await app.getUrl()}`);
}
bootstrap();
