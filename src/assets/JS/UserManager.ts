import {User, UserTyp} from "./User";


export class UserManager {

  allUser: Map<string, User>;

  constructor(){
    this.allUser = new Map<string, User>();
  }

  addNewInternalUser(name: string){

    if(this.allUser.has(name)){
      console.log("ERROR| USERMANAGER | User ist already used");
    }else{
      console.log("INFO| USERMANAGER | New Internal User has been added with the Name: "+name);
      this.allUser.set(name, new User(name,UserTyp.INTERNAL,0));
    }
  }

  addNewExternalUser(name: string){

    if(this.allUser.has(name)){
      console.log("ERROR| USERMANAGER | User ist already used");
    }else{
      console.log("INFO| USERMANAGER | New External User has been added with the Name: "+name);
      this.allUser.set(name, new User(name,UserTyp.EXTERNAL,0));
    }
  }

  addNewGuestUser(name: string){

    if(this.allUser.has(name)){
      console.log("ERROR| USERMANAGER | User ist already used");
    }else{
      console.log("INFO| USERMANAGER | New Guest User has been added with the Name: "+name);
      this.allUser.set(name, new User(name,UserTyp.GUEST,0));
    }
  }

  getUserByName(name: string){

    if(!this.allUser.has(name)){
      console.log("ERROR| USERMANAGER | No User with this name");
    }else{
      this.allUser.get(name);
    }
  }

  delteUserByName(name: string){
    if(!this.allUser.has(name)){
      console.log("ERROR| USERMANAGER | No User with this name");
    }else{
      console.log("INFO| USERMANAGER | User with the Name:  "+ name +" has been deleted");
      this.allUser.delete(name);
    }
  }

}
