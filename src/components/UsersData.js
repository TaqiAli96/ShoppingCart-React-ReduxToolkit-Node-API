import React, { useState } from "react";
import Users from "./Users";
import { addUsers, deleteUsers } from "../redux/features/user.feature";
import { useDispatch, useSelector } from "react-redux";
const UsersData = () => {
  // const users = useSelector((store) => {
  //   return store["users"];
  // });
  const users = useSelector((state) => state.users);
  // console.log(users);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addUsers({
        title: query,
      })
    );
    setQuery("");
  };
  const deleteUser = (id) => {
    dispatch(deleteUsers({ id: id }));
    // console.log(completed);
    // console.log(id);
    // const index = users.findIndex((user) => user.id === uID);
    // let comp = users[index];
    // const objCopy = { ...comp };
    // objCopy.completed = !completed;
    // console.log(objCopy);
  };

  return (
    <>
      <div className="container mt-5">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="add item"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">submit</button>
        </form>
        <div className="container mt-5">
          {/* {users
            .filter((user) => user.title.toLowerCase().includes(data))
            .map((user) => (
              <ul className="list-group" key={user.id}>
                <li className="list-group-item d-flex justify-content-between">
                  <input
                    checked={user.isSelected}
                    onChange={() => changeUpdateSelected(user.id)}
                    type="checkbox"
                    className="form-check-input me-2"
                  />{" "}
                  {user.title}{" "}
                  <button onClick={() => deleteUser(user.id, user.completed)}>
                    delete
                  </button>
                </li>
              </ul>
            ))} */}
          {users
            .filter((user) => user.title.toLowerCase().includes(query))
            .map((user) => (
              <ul className="list-group">
                <Users key={user.id} {...user} />
              </ul>
            ))}
        </div>
      </div>
    </>
  );
};

export default UsersData;
