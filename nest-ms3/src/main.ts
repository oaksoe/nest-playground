import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.connectMicroservice({
        transport: Transport.TCP,
        options: {
            port: 5667
        }
    });

    await app.startAllMicroservicesAsync();
    await app.listen(3002);
}
bootstrap();
