import React from "react";
import { Form, Input, Button, Col, Row, Typography } from "antd";
import { useHistory } from "react-router-dom";
import "./LoginForm.css";

const Text = Typography;

const LoginForm = () => {
  const history = useHistory();
  const navigateTo = React.useCallback(() => history.push("/unitkerja-beranda"), [history]);

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onFinish = React.useCallback((values) => {
    console.log("Success:", values);
  }, []);

  const onFinishFailed = React.useCallback((errorInfo) => {
    console.log("Failed:", errorInfo);
  }, []);

  const handleUsernameChange = React.useCallback((e) => {
    setUsername(e.target.value);
  }, []);
  const handlePasswordChange = React.useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  return (
    <Row justify="center">
      <Form
        name="basic"
        labelAlign="left"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ marginTop: "40px", paddingRight: "40px", paddingLeft: "40px" }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
              type: "text",
            },
          ]}
        >
          <Row>
            <Col span={2}>
              <Text> : </Text>
            </Col>
            <Col span={22}>
              <Input value={username} onChange={handleUsernameChange} />
            </Col>
          </Row>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
              type: "password",
            },
          ]}
          style={{ marginTop: "15px" }}
        >
          <Row>
            <Col span={2}>
              <Text> : </Text>
            </Col>
            <Col span={22}>
              <Input.Password id="input_password" value={password} onChange={handlePasswordChange} />
            </Col>
          </Row>
        </Form.Item>

        <Col span={12} offset={5}>
          <Row justify="center">
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                onClick={navigateTo}
                style={{
                  backgroundColor: "#09539C ",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "350px",
                  borderRadius: "10px",
                  marginTop: "50px",
                }}
              >
                Login
              </Button>
            </Form.Item>
          </Row>
        </Col>
      </Form>
    </Row>
  );
};

export default LoginForm;
