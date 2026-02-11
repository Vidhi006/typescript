"use strict";
// function foo(arg :string | number| boolean){
//     arg.toUpperCase();
// }
// foo("a");
// ye interaction type h ye type preserve nhi rkhta 
Object.defineProperty(exports, "__esModule", { value: true });
function foo(arg) {
    if (typeof (arg) == "string") {
        arg.toUpperCase();
    }
}
foo("a");
let user1 = {
    name: "fugbg",
    email: "ftusbn",
    password: "fyuydgvbj"
};
function getPhone(user) {
    if ("phone" in user) {
        return user.phone;
    }
    return 0;
}
let phone = getPhone(user1);
//# sourceMappingURL=typeNarrowing.js.map