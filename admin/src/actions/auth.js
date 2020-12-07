import {auth} from "../apis";
import {saveToken} from "../utils/localStorageToken";
import * as type from '../const/ActionTypes'
// import store from "../store"



export const login = (data) => (dispatch) => {
    console.log("Starting login action")
    dispatch({type: type.LOGIN })
    auth.login(data)
        .then((resp) => {
            console.log("resp: " + resp)
            //dispatch to store
            // store.dispatch({type: "LOGIN_SUCCESS"})
            dispatch({
                type: type.LOGIN_SUCCESS,
                payload: {token: resp.data.token}
            })
            saveToken(resp.data.token)
            // window.location= "/"
        })
        .catch((err) => {
            console.log("err: " + err)
            dispatch({type: type.LOGIN_FAILED})
        })

}