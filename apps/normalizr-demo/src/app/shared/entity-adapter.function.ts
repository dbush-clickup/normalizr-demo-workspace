import { Dictionary, EntityState } from "@ngrx/entity"

export const entityAdapter: <T>(entities: Dictionary<T>, ids: Array<string> | Array<number>) => EntityState<T>
= (entities, ids) => ({
  ids,
  entities
})
