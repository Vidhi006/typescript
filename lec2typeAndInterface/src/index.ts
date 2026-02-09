// diff between type and interface  -> to give type to obj

// Union type -> combination of multiple type

type numOrStr = number | String |boolean;
let a:numOrStr;
a = 10;
a = "hello";
a = true;
 
type role = "user"|"admin";

let r : role;
r= "admin";
r= "user";
// r="jsfbgdg" error

interface  Emp{
    name:String,
    empId : String,
    salary : number,
    phone : number
}
interface  TeamLead{
    name:String,
    empId : String,
    salary : number,
    projectId: String
}

type EmpOrTeamLead = Emp | TeamLead

let e : EmpOrTeamLead = {
    name:"Vidhi",
    empId : "rgk",
    salary:94858,
    phone:5675203
}

//intersection dono ki properties likhni hoti h 

type EmpAndTeam = Emp & TeamLead
let x : EmpAndTeam= {
    name:"Vidhi",
    empId : "rgk",
    salary:94858,
    phone:5675203,
    projectId:"dsfgk"
}

console.log(x)