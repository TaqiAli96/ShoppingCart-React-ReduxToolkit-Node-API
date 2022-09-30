//to combine all the reducers together
import counterReducer from "./features/counter.feature";
import employeeReducer from "./features/employees.features";
import userReducer from "./features/user.feature";

const rootReducer = {
  counter: counterReducer,
  employees: employeeReducer,
  users: userReducer,
};
export default rootReducer;
