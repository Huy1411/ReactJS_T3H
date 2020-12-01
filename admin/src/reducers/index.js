import {combineReducers} from "redux";

import authReducer from "./authReducer";
import usersReducer from "./userReducer";

const reducers = combineReducers({
    auth: authReducer,
    users: usersReducer
})

export default  reducers;