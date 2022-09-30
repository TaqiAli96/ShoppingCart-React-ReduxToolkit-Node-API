import React from "react";
import { Col, Row } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import { MailFilled } from "@ant-design/icons";
import { LockFilled } from "@ant-design/icons";
import { Card } from "antd";
const SignUp = () => {
  return (
    <>
      <Row>
        <Col span={7} offset={8}>
          <Card
            title="Create new account"
            headStyle={{
              backgroundColor: "#0D333F",
              color: "#ffffff",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              fontWeight: "400",
            }}
            style={{
              width: "100%",
              borderRadius: "20px",
              marginTop: "50px",
              boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
            }}
          >
            <Form
              name="basic"
              initialValues={{ remember: true }}
              autoComplete="off"
              style={{ marginTop: "30px" }}
            >
              <Form.Item
                name="fullname"
                rules={[
                  { required: true, message: "Please input your fullname!" },
                ]}
              >
                <Input
                  prefix={
                    <MailFilled
                      style={{ marginRight: "20px", visibility: "hidden" }}
                    />
                  }
                  placeholder="Full Name"
                  size="large"
                />
              </Form.Item>
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input
                  prefix={<MailFilled style={{ marginRight: "20px" }} />}
                  placeholder="Email Address"
                  size="large"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  prefix={<LockFilled style={{ marginRight: "20px" }} />}
                  placeholder="Password"
                  size="large"
                />
              </Form.Item>

              <Form.Item>
                <Button>Register</Button>
              </Form.Item>
            </Form>
            <hr style={{ border: "1px solid gray" }} />
            <Col span={1} offset={12} style={{ marginTop: "-12px" }}>
              or
            </Col>
            <Col span={12} offset={9}>
              <Button size="large">Register With Google</Button>
            </Col>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default SignUp;
