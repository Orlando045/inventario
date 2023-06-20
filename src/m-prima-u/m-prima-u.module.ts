import { Module } from '@nestjs/common';
import { MPrimaUService } from './m-prima-u.service';
import { MPrimaUController } from './m-prima-u.controller';

@Module({
  controllers: [MPrimaUController],
  providers: [MPrimaUService]
})
export class MPrimaUModule {}
