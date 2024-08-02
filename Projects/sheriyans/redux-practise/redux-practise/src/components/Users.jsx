import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userdelete } from "../store/reducers/UserReducers";
const Users = () => {


  const { users ,index} = useSelector((state) => state.UserReducers);

  const dispatch = useDispatch();
  const DeleteHandler = (index) => {
    console.log(index);
    dispatch(userdelete(index));
  };
  return (
    <div className="m-auto container mt-5 bg-red-100 p-10">
      <h1 className="text-2xl font-bold text-red-900">User List</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <h1>
                {user.name}{" "}
                <span
                  onClick={() => DeleteHandler(index)}
                  className="text-red-500 font-black cursor-pointer"
                >
                  X
                </span>
              </h1>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
