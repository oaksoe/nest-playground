import { Controller } from '@nestjs/common';
import { Transport, Client, ClientProxy, MessagePattern } from '@nestjs/microservices';

@Controller()
export class UserMsController {
    @Client({transport: Transport.TCP, options: { port: 5667 }})
    client: ClientProxy

    @MessagePattern({cmd: 'users.create'})
    public async rpcCreate(data: any) {
        if (!data || (data && Object.keys(data).length === 0)) throw new Error('Missing some information.');

        return data;
    }
}
