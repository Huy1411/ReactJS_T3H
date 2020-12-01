import React, {Component} from "react";
import {Button, Card, Form, Input} from 'antd';

import {login} from "../../actions/auth";
import {connect} from "react-redux";
import { Redirect } from "react-router-dom";


const layout = {
    labelCol: {span: 5},
    wrapperCol: {span: 18},
};
const tailLayout = {
    wrapperCol: {span: 24},
};

class LoginPage extends Component {


    onFinish = (values) => {
        this.props.login(values)
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    render() {
        const {isLogin} = this.props
        return (
            isLogin ? (<Redirect to ="/"/>) : (
            <Card size="small"
                title="Login"
                style={{width: 500, textAlign: "center", margin: "20px auto"}}>
                    <Form
                  {...layout}
                  name="basic"
                  initialValues={{remember: true}}
                  onFinish={this.onFinish}
                  onFinishFailed={this.onFinishFailed}>
                  <Form.Item
                      label="Username"
                      name="username"
                      rules={[
                          {
                              required: true,
                              message: 'Please input your username!'
                          },
                          {
                              validator: (_, value) => {
                                  if (value && value.length < 3) {
                                      return Promise.reject("Name length must bigger than 3 !")
                                  }
                                  if (value && value.length > 24) {
                                      return Promise.reject("Name length must smaller than 24 ! ")
                                  }
                                  return Promise.resolve()
                              }

                          }
                      ]}>
                      <Input/>
                  </Form.Item>

                  <Form.Item
                      label="Password"
                      name="password"
                      rules={[{required: true, message: 'Please input your password!'}]}>
                      <Input.Password/>
                  </Form.Item>
                  <h3> {this.props.message} </h3>

                  <Form.Item {...tailLayout}>
                      <Button loading={this.props.loading} type="primary" htmlType="submit">
                          Submit
                      </Button>
                  </Form.Item>
              </Form>
          </Card>
            )
            
            
        )
    }
}

const mapStateToProps = ({auth}) => {
    console.log(auth)
    return {
        isLogin: auth.isLogin,
        message: auth.message,
        loading: auth.loading
    }
}

export default connect(mapStateToProps, {login})(LoginPage);