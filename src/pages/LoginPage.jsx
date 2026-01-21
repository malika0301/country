import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const navigate = useNavigate();
  const onFinish = async (values)=> {
    try {
      let res = await axios.post(`
https://v1.turbotravel.uz/api/auth/signin` , values);
      const token = res?.data?.data?.tokens?.accessToken?.token;
      localStorage.setItem("token", token);
      toast.success("Вы успешно зашли в систему!")
      navigate("admin/country")
    } catch (err) {
      toast.error("Вы ввели неверный номер или пароль!");
      console.log(err);
      
    }
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", height: "100vh" }}>
      <Form
        name="basic"
        labelCol={{ span: 32 }}
        wrapperCol={{ span: 32 }}
        style={{ maxWidth: 400, width: "100%", padding: "20px", backgroundColor: "#C9CFD2", borderRadius: "20px" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div style={{textAlign:"center"}}>
          <h1>Welcome</h1>
          <p>Sign in to your account</p>
        </div>

        <Form.Item
          label="Phone number"
          name="phone_number"
          layout='vertical'
          rules={[{ required: true, message: 'Please input your number!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          layout='vertical'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label={null}>
          <Button block type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default LoginPage;