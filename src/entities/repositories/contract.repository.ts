import { Contract } from '../entities';
import { GenericBaseRepository } from '@entities/repositories/genericRepository';

export abstract class GenericContractRepository
  implements GenericBaseRepository<Contract>
{
  getAll: () => Promise<Contract[]>;
  getOneById: (id: string) => Promise<Contract>;
}
