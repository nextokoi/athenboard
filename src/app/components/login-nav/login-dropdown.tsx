"use client"

import { Dropdown, Input, Button, Form } from "antd";
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

    const items = [
        {
            key: 'form',
            label: (
                // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                <div className="p-2" onClick={(e) => e.stopPropagation()}>
                    <Form
                        name="normal_login"
                        className="login-form"
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <div className="flex flex-col gap-3">
                                <Button type="primary" htmlType="submit" onClick={() => setAction('login')}>
                                    Log in
                                </Button>
                                <Button type="text" htmlType="submit" className="border border-slate-300" onClick={() => setAction('signup')}>
                                    Sign up
                                </Button>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            )
        }
    ]

    return (
        <Dropdown menu={{ items }} trigger={["click"]} onOpenChange={handleOpenChange}>
            <Button type="text" className="text-white">
                <FaUserCircle className="text-2xl" />
                <span className="font-medium">Sign in</span>
            </Button>
        </Dropdown>
    )
}