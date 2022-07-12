import { User } from '../../shared/domain/user';

export interface IUserRegisterRepository {
  save(user: User): Promise<void>;
}
