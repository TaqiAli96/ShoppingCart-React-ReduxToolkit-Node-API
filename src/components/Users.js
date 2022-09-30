import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSelected } from "../redux/features/user.feature";
const Users = ({ ...user }) => {
  const dispatch = useDispatch();

  let changeUpdateSelected = (id, completed) => {
    dispatch(
      updateSelected({
        id: id,
        completed: !completed,
      })
    );
  };
  return (
    <>
      <li
        className="list-group-item d-flex justify-content-between"
        key={user.id}
      >
        <input
          checked={user.completed}
          onChange={() => changeUpdateSelected(user.id)}
          type="checkbox"
          className="form-check-input me-2"
        />{" "}
        {user.title}{" "}
        {/* <button onClick={() => deleteUser(user.id, user.completed)}>
                    delete
                  </button> */}
      </li>
    </>
  );
};

export default Users;
