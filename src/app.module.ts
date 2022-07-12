import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './app/user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { join } from 'path';

const mongoUri =
  'mongodb+srv://' +
  'testAdmin' +
  ':' +
  'adminpassword' +
  '@' +
  'cluster0.9rqim.mongodb.net' +
  '/' +
  'eurekaaddress' +
  '?retryWrites=true&w=majority';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: mongoUri,
      synchronize: true,
      useNewUrlParser: true,
      entities: ['dist/**/*.entity{.ts,.js}'],
      database: 'nestjs',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UserModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
