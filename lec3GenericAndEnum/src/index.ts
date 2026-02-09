type numStrBool = number | string | boolean 
function first(arg : numStrBool[]):numStrBool|undefined{
    return arg[0];
}

let res1 = first([1,2,3,4]);
let res2 = first(["a", "dgdg", "gwrb"]);
let res3 = first([true , false , false])

res1?.toString();
res2?.toString();
//res2 =="a";
//res2.toUpperCase(); it will give error
//as union and intersaction, info about type lost -> union doesnot preserve type
