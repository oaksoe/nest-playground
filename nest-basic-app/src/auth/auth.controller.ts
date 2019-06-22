import { Controller, Get } from '@nestjs/common';
import { JwtAuthService } from './jwt/jwt-auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: JwtAuthService) {}
  
    @Get('token')
    async createToken(): Promise<any> {
    return await this.authService.signIn();
  }
}