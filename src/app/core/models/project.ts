import {User} from "./user";
import {Task} from "./task";

export class Project {
  constructor(public id: string,
              public title: string,
              public description: string,
              public tasks:Task[],
              public manager: User,
              public developers: User[]) {
  }

}
