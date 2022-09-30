import React, { useState } from "react";
import { addUsers, deleteUsers } from "../redux/features/user.feature";
import { useDispatch, useSelector } from "react-redux";
const Users = () => {
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
    dispatch(deleteUsers(id));
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
          {users
            .filter((user) => user.title.toLowerCase().includes(query))
            .map((user, index) => (
              <ul className="list-group" key={index}>
                <li className="list-group-item">
                  <div className="d-flex justify-content-between">
                    {user.title}
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteUser(user.id)}
                    >
                      delete
                    </button>
                  </div>
                </li>
              </ul>
            ))}
        </div>
      </div>
    </>
  );
};

export default Users;
