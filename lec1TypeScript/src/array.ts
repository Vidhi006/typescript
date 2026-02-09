let numArray:number[] = [];

type User={
    name:string,
    age:number
}
let users:User[]=[{
    name:"Vidhi",
    age:20
},{
    name:"Tej",
    age:20
}
]

function printUserName(user:User[]):void{
    user.forEach((use:User):void =>{
        console.log(use.name);
    })
}

printUserName(users)