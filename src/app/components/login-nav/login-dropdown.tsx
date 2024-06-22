"use client"

import { Dropdown, Input, Button, Form, ConfigProvider } from "antd";
import { FaUserCircle } from "react-icons/fa";
import { login, signup } from "@/app/login/action";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function LoginDropdown() {
    const [action, setAction] = useState('login')
    const [open, setOpen] = useState(false)

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const onFinish = (values: any) => {
        const formData = new FormData()
        formData.append('email', values.email)
        formData.append('password', values.password)

        if (action === 'login') {
            login(formData)
        } else if (action === 'signup') {
            signup(formData)
        }
    }

    const handleOpenChange = (open: boolean) => {
        if (open) {
            setOpen(true)
        } else {
            setTimeout(() => setOpen(false), 0)
        }
    }

    const form = () => {
        return (
            <div className="bg-[#F5F5F5] border border-slate-600 p-5 rounded-md">
                <ConfigProvider
                    theme={{
                        components: {
                            Button: {
                                colorPrimary: '#006876',
                                primaryShadow: '#006876',
                                defaultColor: "#333",
                                defaultBg: "#fff",
                                defaultBorderColor: "#006876",
                            }
                        }
                    }}
                >
                    <Form
                        name="normal_login"
                        className="login-form"
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input
                                size="large"
                                prefix={<UserOutlined
                                    className="site-form-item-icon mr-2" />}
                                placeholder="Email"
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                size="large"
                                prefix={<LockOutlined className="site-form-item-icon mr-2" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <div className="flex flex-col gap-3">
                                <Button size="large" type="primary" htmlType="submit" onClick={() => setAction('login')}>
                                    Log in
                                </Button>
                                <Button size="large" htmlType="submit" className="border border-slate-300" onClick={() => setAction('signup')}>
                                    Sign up
                                </Button>
                            </div>
                        </Form.Item>
                    </Form>
                </ConfigProvider>
            </div>
        )
    }

    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        defaultBg: "#006876",
                        defaultColor: "#fff",
                        defaultBorderColor: "#006876",
                    }
                },
            }}
        >
            <Dropdown trigger={["click"]} onOpenChange={handleOpenChange} dropdownRender={() => form() }>
                <Button icon={<FaUserCircle className="text-2xl" />}>
                    <span className="font-medium">Sign in</span>
                </Button>
            </Dropdown>
        </ConfigProvider>
    )
}