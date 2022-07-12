import { EmailAddres } from 'src/app/shared/domain/value-objects/email/emailaddres';
import { UUID } from 'src/app/shared/domain/value-objects/uuid';
import { IUserRegisterRepository } from '../domain/user.create';
import { User } from 'src/app/user/shared/domain/user';
import { UserRegisterDto } from './dto';

export class UserRegisterService {
  constructor(private readonly repository: IUserRegisterRepository) {}

  async handle(params: UserRegisterDto): Promise<User> {
    const user = new User({
      id: UUID.random(),
      password: params.password,
      email: new EmailAddres(params.email),
    });
    await this.repository.save(user);
    return user;
  }
}
