// object ko 3 type se type de skte h

// let user ={
//     name:"Vidhi",
//     age:24
// }

//1. using obj literal
let user:{name:string,age:number} ={
    name:"Vidhi",
    age:24
}

//2 using interface
interface User{
    name:string,
    age:number,
    city:string
}

let user2:User={
    name:"Vidhi",
    age:20,
    city:"Panipat"
}

//3.using type

type Person={
    name:string
}
let user3:Person={
    name:"Vidhi"
}
