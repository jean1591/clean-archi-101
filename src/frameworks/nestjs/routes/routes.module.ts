import { ContractsControllerFramework } from './contracts.route';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  providers: [],
  controllers: [ContractsControllerFramework],
})
export class ControllersModule {}
