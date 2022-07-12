import { ObjectIdColumn } from 'typeorm';

export abstract class BaseEntitySchema {
  @ObjectIdColumn()
  public _id!: string;
}
