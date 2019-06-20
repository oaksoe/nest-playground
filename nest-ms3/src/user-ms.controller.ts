import { Controller, UseFilters } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { RpcValidationException } from './rpc/rpc-validation.exception';
import { RpcValidationFilter } from './rpc/rpc-validation.filter';


@Controller()
@UseFilters(new RpcValidationFilter())
export class UserMsController {
    @MessagePattern({cmd: 'users.create'})
    public async rpcCreate(data: any) {
        if (!data || (data && Object.keys(data).length === 0)) throw new RpcValidationException([]);

        return data;
    }
}
