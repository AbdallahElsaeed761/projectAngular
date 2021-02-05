export class Blog {
    
    
    

    constructor( public title:string , public body:string ,public createdAt:Date = new Date() ,public updateAt:Date = new Date() ,photo: String="" , public tags:String[] = [] ){}

}
