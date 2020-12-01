import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import 'antd/dist/antd.css';

import {Provider} from "react-redux";
import store from "./store";
import {getToken} from "./utils/localStorageToken";
import jwt from "jsonwebtoken";


var token = getToken()
if(token){
    console.log("token:", token)
    const data = jwt.decode(token);
    console.log(data)
    const now = new Date().getTime() / 1000  //convert to timestamp in seconds
    console.log(now)
    if(data.exp > now){
        store.dispatch({
        type: "LOGIN_SUCCESS",
        payload: {token, username: data.username}
    })
    }
    
}
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();