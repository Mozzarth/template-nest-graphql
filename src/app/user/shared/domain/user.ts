import { EmailAddres } from 'src/app/shared/domain/value-objects/email/emailaddres';
import { UUID } from 'src/app/shared/domain/value-objects/uuid';

type parameters = {
  id?: UUID;
  email: EmailAddres;
  password: string;
};
export interface IUserPrimitive {
  id: string;
  email: string;
  password: string;
}

export class User {
  public readonly id: UUID;
  public readonly email: EmailAddres;
  public readonly password: string;

  constructor(params: parameters) {
    this.id = params.id == undefined ? UUID.random() : params.id;
    this.email = params.email;
    this.password = params.password;
  }
  toPrimitives(): IUserPrimitive {
    return {
      id: this.id.value,
      email: this.email.toString(),
      password: this.password,
    };
  }
}
