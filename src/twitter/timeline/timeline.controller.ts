import { Controller, Get } from '@nestjs/common';
import TimelineService from './timeline.service';

@Controller('twitter')
export class TimelineController {
    constructor(private readonly timeLineService: TimelineService) {}
    
    @Get('time-line')
    async getTimeLine() {
        return this.timeLineService.getTimeLine();        
    }
}

export default TimelineController;
