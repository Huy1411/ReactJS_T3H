import * as type from "../const/ActionTypes"

const initialState = {
    isLogin: false,
    token: "",
    message: "",
    loading: false
}

export default function authReducer(state = initialState, action = {}) {
    console.log("Action : ", action)

    switch (action.type) {
        case type.LOGIN:
            return {
                ...state,
                message: "",
                loading: true
            }
        case type.LOGIN_SUCCESS:
            return {
                ...state,
                isLogin: true,
                loading: false,
                token: action.payload.token,
                username: action.payload.username,
                message: "Logged in success "
            }
        case type.LOGIN_FAILED:
            return {
                ...state,
                isLogin: false,
                loading: false,
                message: "Logged in failed"
            }
        default:
            break
    }
    return state
}