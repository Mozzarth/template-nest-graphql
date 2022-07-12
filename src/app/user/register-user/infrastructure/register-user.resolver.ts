import { UserRegisterServiceContainer } from './user-register.container';
import { UserEntity } from '../../shared/infrastructure/user.entity';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { UserRegisterInput } from './dto';

@Resolver(() => UserEntity)
export class RegisterUserResolver {
  constructor(private readonly service: UserRegisterServiceContainer) {}

  @Mutation(() => String)
  async register(@Args() input: UserRegisterInput): Promise<string> {
    const { password, email } = input;
    // return 'hola2';]
    const result = await this.service.handle({ email, password });
    return `${password} ${email}`;
    // return result.toPrimitives();
  }
  @Query(() => String)
  async hello() {
    return 'hello';
  }
}
