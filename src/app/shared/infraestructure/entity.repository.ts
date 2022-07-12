import { EntitySchemaFactory } from './entity-schema-factory';
import { FilterQuery, MongoRepository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class EntityRepository<TSchema, TEntity> {
  constructor(
    protected readonly entityModel: MongoRepository<TSchema>,
    protected readonly entitySchemaFactory: EntitySchemaFactory<
      TSchema,
      TEntity
    >,
  ) {}

  protected async findOneById(id: string): Promise<TEntity | null> {
    const result = await this.findOne({ _id: id });
    return result ? result : null;
  }

  protected async findOne(
    entityFilterQuery: FilterQuery<TSchema>,
  ): Promise<TEntity | null> {
    const entityDocument = await this.entityModel.findOne(entityFilterQuery);
    if (!entityDocument) {
      return null;
    }
    return this.entitySchemaFactory.createFromSchema(entityDocument);
  }

  protected async find(
    entityFilterQuery: FilterQuery<TSchema>,
  ): Promise<TEntity[]> {
    const result = await this.entityModel.find(entityFilterQuery);

    return result.map((entityDocument) =>
      this.entitySchemaFactory.createFromSchema(entityDocument),
    );
  }

  protected async create(entity: TEntity): Promise<void> {
    const schemaObject = this.entitySchemaFactory.create(entity);
    await this.entityModel.save(schemaObject);
  }

  protected async UpdateById(
    id: string,
    entity: Partial<TEntity>,
  ): Promise<boolean> {
    return this.updateOne({ _id: id } as FilterQuery<TSchema>, entity);
  }

  protected async updateOne(
    entityFilterQuery: FilterQuery<TSchema>,
    entity: Partial<TEntity>,
  ): Promise<boolean> {
    this.entityModel.update;
    const updatedEntityDocument = await this.entityModel.updateOne(
      entityFilterQuery,
      entity,
    );
    return updatedEntityDocument ? true : false;
  }
}
