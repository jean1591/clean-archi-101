export interface GenericBaseRepository<T> {
  getAll: (options?) => Promise<T[]>;
  getOneById: (id: string) => Promise<T>;
}
