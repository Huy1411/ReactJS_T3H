import * as type from "../const/ActionTypes"

const initialState = {
    listUser: {
        users: [],
        loading: false,
        total: 0,
    },
    addUser: {
        loading: false,
        success: false,
        message: ""
    },
    getUser:{
        id: "",
        loading: false,
        message: "",
        success: false
    }

}

export default function usersReducer(state = initialState, action = {}) {
    console.log("Action : ", action)

    switch (action.type) {
        case type.FETCH_USERS:
            return {
                ...state,
                listUser: {
                    ...state.listUser,
                    loading: true
                }
            }
        case type.FETCH_USERS_SUCCESS:
            return {
                ...state,
                listUser: {
                    ...state.listUser,
                    loading: false,
                    users: action.payload.users,
                    total: action.payload.total
                }
            }
        case type.FETCH_USERS_FAILED:
            return {
                ...state,
                listUser: {
                    ...state.listUser,
                    loading: false,
                    users: []
                }
            }
        case type.ADD_USER:
            return {
                ...state,
                addUser: {
                    ...state.addUser,
                    loading: true,
                    message: "",
                    success: false
                }
            }
        case type.ADD_USER_SUCCESS:
            return {
                ...state,
                addUser: {
                    ...state.addUser,
                    loading: false,
                    message: action.payload.message,
                    success: true
                }
            }
        case type.ADD_USER_FAILED:
            return {
                ...state,
                addUser: {
                    ...state.addUser,
                    loading: false,
                    message: action.payload.message,
                    success: false
                }
            }
        case type.GET_USER:
            return {
                ...state,
                getUser: {
                    ...state.getUser,
                    loading: true,
                    message: "",
                    success: false
                }
            }
            case type.GET_USER_SUCCESS:
            return {
                ...state,
                getUser: {
                    ...state.getUser,
                    loading: false,
                    message: "Get User Successful !!",
                    user: action.payload.users,
                    success: true
                }
            }
            case type.GET_USER_FAILED:
            return {
                ...state,
                getUser: {
                    ...state.getUser,
                    loading: false,
                    message: "Get User Failed !!",
                    success: false
                }
            }
        default:
            break
    }
    return state
}