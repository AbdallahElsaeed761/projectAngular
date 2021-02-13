export class Signup {
  constructor(public firstname?:string,public lastname?:string,
              public email?:string,public username?:string,public password?:string,
              public photo?:string,public following?:Array<string>,
              public followers?:Array<string>,public _id?:string
      ){

  }
}

