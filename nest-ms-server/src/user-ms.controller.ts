import { Controller, UseFilters, UsePipes, UseGuards, UseInterceptors } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { RpcValidationFilter } from './rpc/rpc-validation.filter';
import { RpcValidationPipe } from './rpc/rpc-validation.pipe';
import { CreateUserRequest } from './models/create-user.request';
import { RpcCheckLoggedInUserGuard } from './rpc/rpc-check-logged-in-user.guard';
import { RpcCleanUserInterceptor } from './rpc/rpc-clean-user.interceptor';

@Controller()
export class UserMsController {

    @MessagePattern({cmd: 'users.create'})
    @UsePipes(new RpcValidationPipe())
    @UseFilters(new RpcValidationFilter())
    public async rpcCreate(data: CreateUserRequest) {
        return data;
    }

    @MessagePattern({cmd: 'users.show'})
    @UseGuards(RpcCheckLoggedInUserGuard)
    @UseInterceptors(RpcCleanUserInterceptor)
    public async rpcShow(data: any) {
        return { name: 'Oak', userData: data};
    }
}
