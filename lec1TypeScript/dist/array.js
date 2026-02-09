"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let numArray = [];
let users = [{
        name: "Vidhi",
        age: 20
    }, {
        name: "Tej",
        age: 20
    }
];
function printUserName(user) {
    user.forEach((use) => {
        console.log(use.name);
    });
}
printUserName(users);
//# sourceMappingURL=array.js.map