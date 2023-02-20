import { Contract } from '@entities/entities';
import { GenericContractRepository } from '@entities/repositories';

export class GetContractById {
  contractRepository: GenericContractRepository;

  constructor(contractRepositoryParam: GenericContractRepository) {
    this.contractRepository = contractRepositoryParam;
  }

  async execute(contractId: string): Promise<Contract> {
    return this.contractRepository.getOneById(contractId);
  }
}
