import { BaseEntitySchema } from 'src/app/shared/infraestructure/entity.base';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { User } from '../domain/user';

@ObjectType(User.name)
@Entity({ name: 'users' })
export class UserEntity extends BaseEntitySchema {
  @Field(() => String)
  @Column()
  public email: string;

  @Field(() => String)
  @Column()
  public password: string;
}
