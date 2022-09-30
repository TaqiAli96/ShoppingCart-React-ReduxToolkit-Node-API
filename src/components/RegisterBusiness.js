import React from "react";
import { Col, Row } from "antd";
import { Card } from "antd";
import { Radio } from "antd";
import { Button, Checkbox, Form, Input } from "antd";

const RegisterBusiness = () => {
  return (
    <>
      <Row>
        <Col span={7} offset={8}>
          <Card
            title={<p style={{ display: "none", margin: 0 }}>title</p>}
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
            <Row>
              <Col span={15} offset={9}>
                <p style={{ fontWeight: "bold", marginBottom: "30px" }}>
                  Select your Business Type
                </p>
              </Col>
            </Row>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              autoComplete="off"
              style={{ marginTop: "10px" }}
            >
              <Row>
                <Col span={20} offset={2}>
                  <Form.Item>
                    <Radio>
                      <p style={{ fontWeight: "bold", marginLeft: "20px" }}>
                        Rental Income/Sole trader/Self assessment
                      </p>
                    </Radio>
                  </Form.Item>
                </Col>
                <Col offset={4} span={20} style={{ marginTop: "-30px" }}>
                  <p style={{ fontSize: "12px" }}>
                    Select this option if you have want to submit Rental Income
                    or Sole trader income or self assessment tax retunrs to HMRC{" "}
                  </p>
                </Col>
                <Col span={20} offset={4}>
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your business!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Business Name"
                      size="large"
                      style={{ width: "250px" }}
                    />
                  </Form.Item>
                </Col>
                <Col span={20} offset={2}>
                  <Form.Item>
                    <Radio>
                      <p style={{ fontWeight: "bold", marginLeft: "20px" }}>
                        Limited company{" "}
                      </p>
                    </Radio>
                  </Form.Item>
                </Col>
                <Col span={20} offset={4}>
                  <p style={{ fontSize: "12px", marginTop: "-30px" }}>
                    Select this option if you have a limited company
                  </p>
                </Col>
                <Col span={20} offset={4}>
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your business!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Company Name"
                      size="large"
                      style={{ width: "250px" }}
                    />
                  </Form.Item>
                </Col>
                <Col span={20} offset={4} style={{ marginTop: "-30px" }}>
                  <p style={{ fontSize: "12px", marginTop: "20px" }}>
                    You can always add more business type once you create the
                    account At the end top of bottom{" "}
                  </p>
                </Col>
                <Col span={14} offset={10}>
                  <Form.Item>
                    <Button
                      htmlType="submit"
                      type="primary"
                      size="large"
                      style={{ backgroundColor: "#0D333F", marginTop: "12px" }}
                    >
                      Create Account
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>

            {/* <Col span={20} offset={4}> */}
            {/* <Form
                  name="basic"
                  initialValues={{ remember: true }}
                  autoComplete="off"
                  style={{ marginTop: "10px" }}
                >
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your company!",
                      },
                    ]}
                  >
                    <Input placeholder="Company Name" size="large" />
                  </Form.Item>
                </Form> */}
            {/* </Col> */}
            {/* <Col span={20} offset={4}>
                <p style={{ fontSize: "12px" }}>
                  You can always add more business type once you create the
                  account At the end top of bottom
                </p>
              </Col>
              <Col span={9} offset={10}>
                <Button type="primary">Create Account</Button>
              </Col> */}
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default RegisterBusiness;
