import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import {composeWithDevTools} from "redux-devtools-extension"

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
export default store;