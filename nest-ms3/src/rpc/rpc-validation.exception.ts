import { ValidationError } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

export class RpcValidationException extends RpcException {
    constructor(public readonly validationErrors: ValidationError[]) {
        super('Validation badly failed');
    }
}
