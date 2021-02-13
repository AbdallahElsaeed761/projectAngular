import { Comment } from "./comment";
export class Blog {

  constructor(public title?:string,public tags?:[string],public body?:string,public createdAt?:Date,
    public updateAt?:Date,public photo?:string,public auther?:object,public _id?:string,public comments?: Comment[]){

  }
}

/*
import { Comment } from "./comment";

export class Blog {
    constructor(

        public title: string,
        public body: string,
        public tags?: Array<string>,
        public photo?: string,
        public _id?: string,
        public createdAt?: Date,
        public updatedAt?: Date,
        public auther?: string,
        public comments?: Comment[],
        public username?: string
    ) { }
}

*/




//     constructor(public title:string , public body:string ,public createdAt:Date = new Date() ,public updateAt:Date = new Date() ,photo: String="" , public tags:String[] = [] ){}

// }

