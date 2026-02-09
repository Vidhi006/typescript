function firstValueGeneric<T>(args:T[]){
    return args[0];
}
let out1 = firstValueGeneric<string>(["a","bc","c"])
out1?.toUpperCase(); 

//? is used to make property optional
interface User{
    readonly adharNumber:number, // value cant be change later in readonly
    name:String,
    email:String,
    password:number,
    phone?:number  //? lgake optional bna diya
}

let user1:User={
    adharNumber:2345678,
    name:"dfvs",
    email:"fveigh",
    password:2678,
    phone:3243567
}

let user2:User={
    adharNumber:3145674323,
    name:"dfvbsdv",
    email:"bchigev",
    password:7636
}