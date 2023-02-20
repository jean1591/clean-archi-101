import { Contract } from '@entities/entities';
import { GenericContractRepository } from '@entities/repositories';

export class GetContracts {
  contractRepository: GenericContractRepository;

  constructor(contractRepositoryParam: GenericContractRepository) {
    this.contractRepository = contractRepositoryParam;
  }

  async execute(): Promise<Contract[]> {
    return this.contractRepository.getAll();
  }
}
