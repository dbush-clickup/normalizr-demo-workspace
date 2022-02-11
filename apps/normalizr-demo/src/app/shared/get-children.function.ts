import { EntityState } from '@ngrx/entity';

export const getChildren = <T>(entity: EntityState<T>, ids: unknown[]): T[] =>
  ids.map((id) => entity.entities[id as string]) as T[];
