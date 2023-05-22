import { Injectable } from '@nestjs/common';
import {Issue} from "./issue.interface";

@Injectable()
export class IssueService {
  private static issues: Issue[] = [];

  getAll() {
    return IssueService.issues;
  }

  create(issue: Issue) {
    IssueService.issues.push(issue);
  }

  delete(id: number) {
    const toDelete = IssueService.issues.find(i => i.id === id);
    const index = IssueService.issues.indexOf(toDelete);
    if (index > -1) IssueService.issues.splice(index,1);
    return IssueService.issues;
  }

  update(issue: Issue) {

  }
}
