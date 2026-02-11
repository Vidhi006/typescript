// function foo(arg :string | number| boolean){
//     arg.toUpperCase();
// }
// foo("a");
 // ye interaction type h ye type preserve nhi rkhta 

function foo(arg :string | number| boolean){
    if(typeof(arg)=="string"){
        arg.toUpperCase();
    }
}
foo("a");

interface User{
    name:string,
    email:string,
    password:string,
    phone?:number
}
let user1:User={
    name : "fugbg",
    email : "ftusbn",
    password : "fyuydgvbj"
}

function getPhone(user : User){
    if("phone" in user){
        return user.phone;
    }
    return 0
}
let phone : number = getPhone(user1);