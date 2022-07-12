import { Test, TestingModule } from '@nestjs/testing';
import { UserRegisterService } from '../app/user-register.service';

describe('RegisterUserService', () => {
  let service: UserRegisterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserRegisterService],
    }).compile();

    service = module.get<UserRegisterService>(UserRegisterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
