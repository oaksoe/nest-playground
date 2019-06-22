import { ExecutionContext, Injectable, NestInterceptor, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class RpcCleanUserInterceptor implements NestInterceptor {
    public intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next
            .handle()
            .pipe(
            map(user => {
                const tempUser = JSON.parse(JSON.stringify(user));
                console.log('Temp User: ', tempUser);
                return tempUser;
            }),
            map(user => {
                return {
                    ...user,
                    password: undefined     // this will remove password
                };
            })
        );
    }
}
