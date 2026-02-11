//enum -> set of constant value 
type Role = "user" | "admin"

interface Blog{
    title:string,
    body:string,
    imageURL:string
}

function addBlog(role:Role ,blog:Blog):string{
    if(role == "user"){
        return " not unthorized"
    }
    return "blog is added"
}
addBlog("user",{title:"first blog" , body:"hfdgbijf" , imageURL:"asdvf"});

enum Role2{
    user="user",
    admin="admin"
}
console.log(Role2.user); //0
console.log(Role2.admin) //1
//default enum value start with 0 and increment by one afterwards
function addBlog2(role:Role2 , blog :Blog):string{
    if(role == "user"){
        return "not authorized"
    }
    return "blog is added"
}
addBlog2(Role2.admin,{title:"first blog" , body:"etrrtuh", imageURL:"wyeufsdvb"})
addBlog2(Role2.user,{title:"second blog" , body:"udfib", imageURL:"sodgbhod"})