import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor() {}

  async findOneByToken(token: string): Promise<any> {
    // Validate if token passed along with HTTP request
    // is associated with any registered account in the database
    return await Promise.resolve({ id: 'user1' });
  }

  async findOneByEmail(email: string): Promise<any> {
    return await Promise.resolve({ id: 'user1' });
  }
}