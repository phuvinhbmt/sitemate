import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {IssueService} from "./issue.service";
import {Issue} from "./issue.interface";

@Controller('issue')
export class IssueController {
  constructor(private issueService: IssueService) {}

  @Post()
  create(@Body() issue: Issue)  {
    console.log(issue);
    return this.issueService.create(issue);
  }
  @Get()
  read() {
    return this.issueService.getAll();
  }

  @Put()
  update(@Body() issue: Issue) {
    console.log(issue);
    return this.issueService.update(issue);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    console.log(id);
    return this.issueService.delete(id);

  }
}
