import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.createMicroservice(AppModule, {
        transport: Transport.RMQ,
        options: {
          urls: [`amqp://localhost:5672`],
          queue: 'cats_queue',
          queueOptions: { durable: false },
        },
    });

    app.listen(() => console.log('Microservice RabbitMQ is listening'));
}
bootstrap();
