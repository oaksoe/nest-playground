import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserMsController } from './user-ms.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, UserMsController],
  providers: [AppService],
})
export class AppModule {}
