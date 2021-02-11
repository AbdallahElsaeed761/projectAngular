export class Blog {

  constructor(public title?:string,public tags?:[string],public body?:string,public createdAt?:Date,
    public updateAt?:Date,public photo?:string,public auther?:object,public _id?:string){

  }
}






//     constructor(public title:string , public body:string ,public createdAt:Date = new Date() ,public updateAt:Date = new Date() ,photo: String="" , public tags:String[] = [] ){}

// }

