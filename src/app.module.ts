import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IssueController } from './issue/issue.controller';
import { IssueService } from './issue/issue.service';

@Module({
  imports: [],
  controllers: [AppController, IssueController],
  providers: [AppService, IssueService],
})
export class AppModule {}
