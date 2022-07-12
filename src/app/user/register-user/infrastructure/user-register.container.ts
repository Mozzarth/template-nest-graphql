import { UserRegisterRepository } from './register-user.repository';
import { UserRegisterService } from '../app/user-register.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRegisterServiceContainer extends UserRegisterService {
  constructor(repository: UserRegisterRepository) {
    super(repository);
  }
}
