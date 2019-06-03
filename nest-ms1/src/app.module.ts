import { Module, MiddlewareConsumer, RequestMethod  } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { CatsController } from './cats/cats.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    CatsModule, 
    AuthModule, 
    UsersModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      //.forRoutes('cats');
      // .forRoutes({ path: 'cats', method: RequestMethod.GET });
      // .forRoutes({ path: 'ab*cd', method: RequestMethod.ALL });
      .exclude(
        { path: 'cats', method: RequestMethod.GET },
        { path: 'cats', method: RequestMethod.POST }
      )
      .forRoutes(CatsController);
  }
}
