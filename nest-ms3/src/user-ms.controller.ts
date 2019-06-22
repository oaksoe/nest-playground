import { Controller, UseFilters, UsePipes } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { RpcValidationException } from './rpc/rpc-validation.exception';
import { RpcValidationFilter } from './rpc/rpc-validation.filter';
import { RpcValidationPipe } from './rpc/rpc-validation.pipe';
import { CreateUserRequest } from './models/create-user.request';

@Controller()
export class UserMsController {

    @MessagePattern({cmd: 'users.create'})
    @UsePipes(new RpcValidationPipe())
    @UseFilters(new RpcValidationFilter())
    public async rpcCreate(data: CreateUserRequest) {
        return data;
    }
}
