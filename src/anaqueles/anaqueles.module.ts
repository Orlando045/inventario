import { Module } from '@nestjs/common';
import { AnaquelesService } from './anaqueles.service';
import { AnaquelesController } from './anaqueles.controller';

@Module({
  controllers: [AnaquelesController],
  providers: [AnaquelesService]
})
export class AnaquelesModule {}
