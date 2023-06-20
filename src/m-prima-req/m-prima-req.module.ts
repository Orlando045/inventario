import { Module } from '@nestjs/common';
import { MPrimaReqService } from './m-prima-req.service';
import { MPrimaReqController } from './m-prima-req.controller';

@Module({
  controllers: [MPrimaReqController],
  providers: [MPrimaReqService]
})
export class MPrimaReqModule {}
