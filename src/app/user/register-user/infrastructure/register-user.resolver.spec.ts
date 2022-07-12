import { Test, TestingModule } from '@nestjs/testing';
import { RegisterUserResolver } from './register-user.resolver';

describe('RegisterUserResolver', () => {
  let resolver: RegisterUserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegisterUserResolver],
    }).compile();

    resolver = module.get<RegisterUserResolver>(RegisterUserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
