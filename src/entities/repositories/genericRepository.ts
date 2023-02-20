export interface GenericBaseRepository<T> {
  getAll: () => Promise<T[]>;
  getOneById: (id: string) => Promise<T>;
}
