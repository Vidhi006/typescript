// interface are expandable

interface User{
    name:String
}
interface User{
    age:number
}

let u:User={
    name : " Vidhi",
    age:20
}

// interface is user to implement class

interface Vehicle{
    brandName:String,
    getBrandName:()=> String  // function()=>   return type String
}

class Bike implements Vehicle{
    brandName: string;
    constructor(brandName :string){
        this.brandName = brandName;
    }
    getBrandName():string{
        return this.brandName;
    }
}

class Car implements Vehicle{
    brandName: string;
    constructor(brandName :string){
        this.brandName = brandName;
    }
    getBrandName():string{
        return this.brandName;
    }
    openAirBags():void{
        console.log("Air bags opened")
    }
}