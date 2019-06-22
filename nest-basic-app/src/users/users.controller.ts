import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';

@Controller('users')
export class UsersController {
    constructor() {}
  
    @Get()
    @UseGuards(new JwtAuthGuard())
    findAll() {
        return [];
    }
}