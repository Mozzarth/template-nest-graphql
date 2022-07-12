import { ArgsType, Field } from '@nestjs/graphql';
import { UserRegisterDto } from '../app/dto';

@ArgsType()
export class UserRegisterInput implements Required<UserRegisterDto> {
  @Field(() => String)
  password: string;
  @Field(() => String)
  email: string;
}
