import React, { useState } from 'react'

function App(){
  //you should never mutate previous state value,
  //previous state should be immutable
  //always create a new state and put its value in place of previous state

  let[count,setCount] = useState(0);
  let[users,setUser] = useState([{name:"Vidhi",age:20}, {name:"Tej" , age:21}])
  function changeCount(){

    //set(count++) cant do this
    let newCount = count+1;
    setCount(newCount);
  }

  function addUser(name , age){
    //user --[{},{}] ->name:"vivek" , age:20
     let newUser = {name:name , age : age};
    // users.push(newUser);
    // setUser(users); //cant do this as it change prev array

    // let newUsers = users; //cant do this also
    // newUsers.push(newUser);
    // console.log(newUsers);
    // console.log(users)

    // let newUsers=[];
    // users.forEach((u)=>newUsers.push(u));
    // newUsers.push(newUser);
    // console.log(newUsers);
    // console.log(users)
    // setUser(newUsers)

    //using spread Operator ...
    //[1,2,3] => ...[1,2,3] =>1,2,3 variable bhar nikal dega
    let newUsers = [...users , newUser];
    setUser(newUsers);
    console.log(users)
  }
  //addUser("Vivek" , 20)
  return(
    <div>
      <h1>Array</h1>
      <button onClick={()=>{addUser("vivek", 20)}}>add user</button>
    </div>
  )
}
export default App