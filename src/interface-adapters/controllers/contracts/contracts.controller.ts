import { GetContractById, GetContracts } from '@use-cases/contracts';

import { Contract } from '@entities/entities';
import { GenericContractRepository } from '@entities/repositories';

export class ContractsController {
  contractRepository: GenericContractRepository;

  constructor(contractRepositoryParams: GenericContractRepository) {
    this.contractRepository = contractRepositoryParams;
  }

  async getContracts(): Promise<Contract[]> {
    const useCase = new GetContracts(this.contractRepository);

    return useCase.execute();
  }

  async getContractById(contractId: string): Promise<Contract> {
    const useCase = new GetContractById(this.contractRepository);

    return useCase.execute(contractId);
  }
}
