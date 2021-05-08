import { Module } from '@nestjs/common';
import { TokenService } from './token/token.service';
import TimelineController from './timeline/timeline.controller';
import TimelineService from './timeline/timeline.service';

@Module({
    controllers: [TimelineController],
    providers: [TimelineService, TokenService],
  })
export class TwitterModule {}
