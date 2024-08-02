import React, { useEffect, useRef, useState } from "react";

const App2 = () => {
  const user1 = [{ id: 1, name: "prathmesh", skill: "html" }];
  const user2 = [{ id: 2, name: "nikhil", skill: "js" }];
  const user3 = [{ id: 3, name: "dhoni", skill: "react" }];

  //2
  const [data, setData] = useState(user1);

  //5
  const userdata = useRef();

  //6
  const GetUser = () => {
    // alert(userdata.current.value)
    let result = userdata.current.value;
    if (result === "user1") {
      setData(user1);
    } else if (result === "user2") {
      setData(user2);
    } else if (result === "user3") {
      setData(user3);
    } else {
      setData(user1);
    }

  };

  useEffect(() => {
    alert("Congrats successfully fetch data");
  }, [data]);
  return (
    <>
      <h1> Employe Record</h1>

      {/* // 4  */}
      <label htmlFor="">Choose user</label>
      <select name="" id="" onChange={() => GetUser()} ref={userdata}>
        <option value="user1">User 1</option>
        <option value="user2">User 2</option>
        <option value="user3">User 3</option>
      </select>
      {/* //3 */}
      {data.map((val) => {
        return (
          <>
            <center>
              <h1>Emp id{val.id}</h1>
              <h1>Emp name{val.name}</h1>
              <h1>Emp skill{val.skill}</h1>
            </center>
          </>
        );
      })}
    </>
  );
};

export default App2;
