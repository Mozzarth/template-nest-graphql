import { EntityRepository } from 'src/app/shared/infraestructure/entity.repository';
import { UserEntityFactory } from '../../shared/infrastructure/user-entity-factory';
import { UserEntity } from '../../shared/infrastructure/user.entity';
import { IUserRegisterRepository } from '../domain/user.create';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../shared/domain/user';
import { Injectable } from '@nestjs/common';
import { MongoRepository } from 'typeorm';

@Injectable()
export class UserRegisterRepository
  extends EntityRepository<UserEntity, User>
  implements IUserRegisterRepository
{
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: MongoRepository<UserEntity>,
    private readonly factory: UserEntityFactory,
  ) {
    super(repository, factory);
  }

  async save(user: User): Promise<void> {
    await this.create(user);
    const currentUSer = await this.findOneById(user.id.value);
    console.log(currentUSer);
  }
}
