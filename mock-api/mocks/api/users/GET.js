// var users = [
//     {
//         "id": "RJ1",
//         "name": "Nguyen Xuan Huy",
//         "class": "ReactJS"
//     },
//     {
//         "id": "RJ2",
//         "name": "Nguyen Giang Son",
//         "class": "ReactJS"
//     },
//     {
//         "id": "RJ3",
//         "name": "Hoang Trong Ha",
//         "class": "ReactJS"
//     },
//     {
//         "id": "RJ4",
//         "name": "Hoang Phuong Dung",
//         "class": "ReactJS2008"
//     },
//     {
//         "id": "RJ5",
//         "name": "Hoang Van Tu",
//         "class": "ReactJS2008"
//     },
//     {
//         "id": "RJ6",
//         "name": "Tran Van Nguyen",
//         "class": "ReactJS2008"
//     },
//     {
//         "id": "RJ7",
//         "name": "Dang Van Lam",
//         "class": "ReactJS2008"
//     },
// ]
// // {
//     "success":true,
//     "data":users
// }

var fs = require("fs");

module.exports = (req, res) => {

    fs.readFile("users.json", function (err, data) {
        var usersDataStr = String(data);
        var usersData = JSON.parse(usersDataStr);
        users = usersData.users

        let {key, page, pageSize} = req.query;
        if (!key) {
            key = ""
        }
        if (!page) {
            page = 1
        }
        if (!pageSize) {
            pageSize = 10
        }
        let filterUsers = users.filter(user => user.name.toLowerCase().includes(key.toLowerCase()))

        let total = filterUsers.length
        let fromIndex = (page - 1) * pageSize
        let endIndex = page * pageSize
        if (endIndex > total) {
            endIndex = total
        }
        filterUsers = filterUsers.filter((_, index) => index >= fromIndex && index < endIndex)
        res.status(200).json({status: true, data: filterUsers, key, page, pageSize, total});
    })

}