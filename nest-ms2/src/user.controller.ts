import { Controller, Post, Req, Res, HttpStatus } from '@nestjs/common';
import { Transport, Client, ClientProxy, MessagePattern } from '@nestjs/microservices';

@Controller()
export class UserController {
    @Client({transport: Transport.TCP, options: { port: 5667 }})
    client: ClientProxy

    @Post('users')
    public async create(@Req() req, @Res() res) {
        this.client.send({cmd: 'users.create'}, req.body).subscribe({
            next: users => {
                res.status(HttpStatus.OK).json(users);
            },
            error: error => {
                if (error.error_code === 'VALIDATION_FAILED') {
                    res.status(HttpStatus.BAD_REQUEST).send(error);
                } else {
                    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
                }
            }
        });
    }

    // @MessagePattern({cmd: 'users.create'})
    // public async rpcCreate(data: any) {
    //     if (!data || (data && Object.keys(data).length === 0)) throw new Error('Missing some information.');

    //     return data;
    // }
}
