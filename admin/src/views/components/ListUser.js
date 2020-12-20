import React, {Component} from 'react'
import {Space, Table, Tag, Input} from 'antd';
import {connect} from 'react-redux';
import {fetchUsers} from '../../actions/users';
import {Link, withRouter} from 'react-router-dom'
import PropTypes from "prop-types"


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
                    render: ({id}) => (
                        <Space size="middle">
                            <a>View</a>
                            <a onClick={() => this.onEditUser(id)}> Edit</a>
                            {/*<Link to={`users/edit/${id}`}> Edit</Link>*/}
                            <a>Delete</a>
                        </Space>
                    ),
                },
            ],
            key: "",
            current: 1,
            pageSize: 5,
        }
        this.onSearchDebounce = this.debounce(this.onSearch,500)
    }

    onEditUser = (id) => {
        console.log(id)
        setTimeout(() => {
            this.props.history.push(`edit/${id}`)
        }, 2000)


    }

    componentDidMount() {
        const {key, current, pageSize} = this.state;
        this.props.fetchUsers({key, current, pageSize});
    }

    onPageChange = (current) => {
        this.setState({current})
        this.onFetchUsers(this.state.key, current)
    }

    onSearch = (key) => {
        this.setState({key, current: 1})
        this.onFetchUsers(key, 1)

    }

    onFetchUsers = (key, current) => {
        const {pageSize} = this.state
        this.props.fetchUsers({key, current, pageSize})
    }
    onSearchChange = (event) => {
        let key = event.target.value
        if (!key) {
            key = ""
        }
        this.onSearchDebounce(key)

    }

    debounce = (func, wait) => {
        let timeout
        return (key) => {
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                func(key)
            },wait)

        }
    }


    render() {
        const {columns, current, pageSize} = this.state;
        const {listUser} = this.props;
        return (
            <>
                <Search placeholder="input search text"
                        onChange={this.onSearchChange}
                        onSearch={this.onSearch}
                        style={{width: 300, margin: '10px 0'}}
                        enterButton/>
                <Table key={listUser.users.id} loading={listUser.loading}
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

ListUser.propType={
    fetchUsers: PropTypes.func.required,
    listUser: PropTypes.shape({
        total: PropTypes.number.required,
        loading: PropTypes.bool.isRequired,
        users: PropTypes.array.isRequired

    })

}


function mapStateToProps({users}) {
    return {
        listUser: users.listUser,

    }

}

export default connect(mapStateToProps, {fetchUsers})(withRouter(ListUser))