import React, {useState, useEffect} from 'react';
import {useFormInput} from "../../utils/hooks";
import {useParams} from "react-router-dom"

import {Form, Row, Col, Input, Button, Typography} from 'antd';
import {connect} from "react-redux";
import {addUser, getUser} from "../../actions/users"

const {Text} = Typography;

function AddUser({addUser, addUserState, getUser , getUserState}) {
    const [id, setId] = useFormInput("");
    const [name, setName] = useFormInput("");
    const [className, setClassName] = useFormInput("");

    const params = useParams()
    useEffect(() => {
        console.log("params : " + params)
        getUser(params.id)
    },[])

    useEffect(() => {
        if(getUserState.success){
            let {user} = getUserState
            setId({target: {value :user.id}})
            setName({target: {value :user.name}})
            setClassName({target: {value :user.class}})
        }
    }, [getUserState.success]);
    

    const submit = () => {
        if(params.id){
            //create update user actions, create api , tao reducer
            // updateUser({})

        }else {
            addUser({
                id,
                name,
                className,
            })
            console.log(`ID: ${id}, Name: ${name}, Class: ${className}`)
        }

    }
    return (
        <div>
            <h3>{params.id ? "Edit User" : "Add User"}</h3>

            <Form>
                <Row style={{margin: "10px"}}>
                    <Col span={4}>ID</Col>
                    <Col span={8}>
                        <Input value={id} onChange={setId}/>
                    </Col>
                </Row>
                <Row style={{margin: "10px"}}>
                    <Col span={4}>Name</Col>
                    <Col span={8}>
                        <Input value={name} onChange={setName}/>
                    </Col>
                </Row>
                <Row style={{margin: "10px"}}>
                    <Col span={4}>Class</Col>
                    <Col span={16}>
                        <Input value={className} onChange={setClassName}/>
                    </Col>
                </Row>
                <Button loading={addUserState.loading} onClick={submit}>Add</Button>

                {
                    addUserState.success
                        ?
                        <Text type="success">{addUserState.message}</Text>
                        :
                        <Text type="danger">{addUserState.message}</Text>
                }

            </Form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        addUserState: state.users.addUser,
        getUserState: state.users.getUser
    }
}


export default connect(mapStateToProps, {addUser, getUser})(AddUser);