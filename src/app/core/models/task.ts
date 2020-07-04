import {Project} from "./project";
import {User} from "./user";

export class Task {
  constructor(
    public id: string,
    public project: Project,
    public assignedTo: User,
    public title:string,
    public status: string,
    public description: string,
    public files: string[],
    public estimation: number,
    public workedIn: number) {
  }
}
