import {UserManager} from "./UserManager";

export class Model{
  userManager: UserManager;

  constructor(){
    this.userManager = new UserManager();
  }

  getUserManger(): UserManager{
    return this.userManager;
  }
}
