import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CatsModule, AuthModule, UsersModule],
})
export class AppModule {}
