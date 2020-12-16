import AddUser from "./views/components/AddUser";
import ListUser from "./views/components/ListUser";

const routers =[
    {
        name: "Option1",
        path : "/option1",
        icon: "",
        component: <h3>Option1</h3>
    },
    {
        name: "Users",
        path: "/users",
        icon: "",
        children: [
            {
                name: "Add User",
                path: "/users/add",
                icon: "",
                component: <AddUser/>

            },
            {
                name: "List User ",
                path: "/users/list",
                icon: "",
                component: <ListUser/>
            },
            {
                name: "Update User ",
                path: "/users/edit/:id",
                icon: "",
                component: <AddUser/>,
                hidden: true

            }
        ]

    }
]
export default routers;