import { Contract } from '@entities/entities';
import { GenericContractRepository } from '@entities/repositories';

export class ContractRepository implements GenericContractRepository {
  async getAll(): Promise<Contract[]> {
    return [];
  }
  async getOneById(contractId: string): Promise<Contract> {
    console.log('🚀 ~ getOneById ~ contractId', contractId);
    return {} as Contract;
  }
}
