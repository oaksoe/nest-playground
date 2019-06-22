import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RpcCheckLoggedInUserGuard implements CanActivate {
    canActivate(
        context: ExecutionContext
    ): boolean | Promise<boolean> | Observable<boolean> {
        const data = context.switchToRpc().getData();
        console.log('Data: ', data);
        
        // here check if the id from get route param and current req.user id is the same
        // return Number(data.userId) === data.user.id;

        return true;
    }
}
