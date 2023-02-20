import { Contract } from '../entities';
import { GenericBaseRepository } from '@entities/repositories/genericRepository';

export interface GenericContractRepository
  extends GenericBaseRepository<Contract> {
  getAll: () => Promise<Contract[]>;
  getOneById: (id: string) => Promise<Contract>;
}
