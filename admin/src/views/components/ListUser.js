import React, {Component} from 'react'
import {Space, Table, Tag,Input} from 'antd';
import {connect} from 'react-redux';
import {fetchUsers} from '../../actions/users';


const {Search} = Input


class ListUser extends Component {

    constructor() {
        super()
        this.state = {
            columns: [
                {
                    title: 'ID',
                    dataIndex: 'id',
                    key: 'id',
                    render: text => <a>{text}</a>,
                },
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                    render: text => <a>{text}</a>,
                },
                {
                    title: 'Class',
                    dataIndex: 'class',
                    key: 'class',
                    render: text => <a>{text}</a>,
                },
                {
                    title: 'Marks',
                    key: 'marks',
                    dataIndex: 'marks',
                    render: () => (
                        <Tag color={"red"} key={"1"}>
                            10
                        </Tag>
                    )
                },
                {
                    title: 'Action',
                    key: 'action',
                    render: () => (
                        <Space size="middle">
                            <a>View</a>
                            <a>Edit</a>
                            <a>Delete</a>
                        </Space>
                    ),
                },
            ],
            key: "",
            current: 1,
            pageSize: 2,
        }
    }

    componentDidMount() {
        const {key,current, pageSize } = this.state;
        this.props.fetchUsers({key,current,pageSize});
    }

    onPageChange = (current) => {
        this.setState({current})
        this.onFetchUsers(this.state.key, current)
    }

    onSearch = (key) =>{
        this.setState({key,current : 1})
        this.onFetchUsers(key , 1)

    }

    onFetchUsers = (key,current) => {
        const {pageSize} = this.state
        this.props.fetchUsers({key,current, pageSize})
    }
    onSearchChange = (event) => {
        let key = event.target.value
        if(!key){
            key = ""
        }
        this.onSearch(key)

    }


    render() {
        const {columns, current, pageSize} = this.state;
        const {listUser} = this.props;
        return (
            <>
                <Search placeholder="input search text"
                        onChange={this.onSearchChange}
                        onSearch={this.onSearch}
                        style={{ width: 300, margin: '10px 0'}}
                        enterButton />
                <Table key = {listUser.users.id} loading={listUser.loading}
                       columns={columns}
                       dataSource={listUser.users}
                       pagination={{
                           pageSize,
                           total: listUser.total,
                           current,
                           onChange: this.onPageChange

                       }}
                />
            </>
        )
    }
}


function mapStateToProps({users}) {
    return {
        listUser: users.listUser,

    }

}

export default connect(mapStateToProps, {fetchUsers})(ListUser)