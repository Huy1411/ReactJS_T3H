import axios from "axios"
import {getToken} from "../utils/localStorageToken";
const Baseapi = process.env.REACT_APP_BASE_API

// const config = {
//     headers: {
//         Authorization :`Bearer ${getToken()}`,
//     }
// }
export default {
    fetchUsers: (data) => axios.get(`${Baseapi}/api/users?key=${data.key}&page=${data.current}&pageSize=${data.pageSize}`),
    addUser: (data) => axios.post(`${Baseapi}/api/users/add`,data),
    getUser: (id) => axios.get(`${Baseapi}/api/users/get?id=${id}`),
}