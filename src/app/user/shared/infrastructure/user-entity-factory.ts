import { EntitySchemaFactory } from 'src/app/shared/infraestructure/entity-schema-factory';
import { EmailAddres } from 'src/app/shared/domain/value-objects/email/emailaddres';
import { UUID } from 'src/app/shared/domain/value-objects/uuid';
import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { User } from '../domain/user';

@Injectable()
export class UserEntityFactory
  implements EntitySchemaFactory<UserEntity, User>
{
  create(entity: User): UserEntity {
    return {
      _id: entity.id.value,
      email: entity.email.toString(),
      password: entity.password,
    };
  }
  createFromSchema(entitySchema: UserEntity): User {
    return new User({
      id: new UUID(entitySchema._id),
      email: new EmailAddres(entitySchema.email),
      password: entitySchema.password,
    });
  }
}
