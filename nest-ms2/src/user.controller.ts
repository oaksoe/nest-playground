import { Controller, Post, Get, Param, Req, Res, HttpStatus } from '@nestjs/common';
import { Transport, Client, ClientProxy } from '@nestjs/microservices';

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

    @Get('users/:userId')
    public async show(@Param('userId') userId: number, @Req() req, @Res() res) {
        this.client.send({cmd: 'users.show'}, {userId, user: req.user}).subscribe({
            next: user => {
                res.status(HttpStatus.OK).json(user);
            },
            error: error => {
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
            }
        });
    }
}
