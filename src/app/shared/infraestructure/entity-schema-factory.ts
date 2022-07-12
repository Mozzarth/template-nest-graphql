import { DeepPartial } from 'typeorm';

export interface EntitySchemaFactory<TSchema, TEntity> {
  create(entity: TEntity): DeepPartial<TSchema>;
  createFromSchema(entitySchema: TSchema): TEntity;
}
