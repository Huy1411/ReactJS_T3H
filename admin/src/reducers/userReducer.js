import * as type from "../const/ActionTypes"

const initialState = {
    listUser: {
        users: [],
        loading: false,
        total: 0,
    },

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
        default:
            break
    }
    return state
}