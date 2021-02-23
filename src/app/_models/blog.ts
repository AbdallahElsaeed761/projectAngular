import { Comment } from "./comment";
export class Blog {

  constructor(public title?:string,public tags?:[string],public body?:string,public createdAt?:Date,
    public updateAt?:Date,public photo?:string,public auther?:object,public _id?:string,public comments?: Comment[]){

  }
}



