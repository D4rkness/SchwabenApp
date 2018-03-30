export class User {

  name: string;
  openBill: number;
  userTyp: UserTyp;
  userId: number;

  constructor(name: string, userTyp: UserTyp, userId: number){
    this.name = name;
    this.userTyp = userTyp;
    this.openBill = 0;
    this.userId = userId;
  }

  addToOpenBill(money: number){
    if(money < 0){
      console.log("ERROR| USER | Added money is lower then 0");
    }else{
      console.log("INFO| USER | Money has been added to the open bill: "+money);
      this.openBill = this.openBill + money;
    }

  }

  subtractFromOpenBill (money: number){
    if(money > 0){
      console.log("ERROR| USER | subtracted money is lower then 0");
    }else if( money > this.openBill){
      console.log("ERROR| USER | subtracted money is higher then 0");
    }else{
      console.log("INFO| USER | Money has been removed to the open bill: "+money);
      this.openBill = this.openBill - money;
    }
  }

  getUserId(): number{
    return this.userId;
  }
}

export enum UserTyp {
  INTERNAL,
  EXTERNAL,
  GUEST
}
