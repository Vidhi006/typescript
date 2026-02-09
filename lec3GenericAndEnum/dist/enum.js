"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addBlog(role, blog) {
    if (role == "user") {
        return " not unthorized";
    }
    return "blog is added";
}
addBlog("user", { title: "first blog", body: "hfdgbijf", imageURL: "asdvf" });
var Role2;
(function (Role2) {
    Role2[Role2["user"] = 0] = "user";
    Role2[Role2["admin"] = 1] = "admin";
})(Role2 || (Role2 = {}));
console.log(Role2.user); //0
console.log(Role2.admin); //1
//default enum value start with 0 and increment by one afterwards
//# sourceMappingURL=enum.js.map