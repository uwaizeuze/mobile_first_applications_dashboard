import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import { UserContext } from "../context/userContext";

const UserForm = () => {
  const { addUser, getUser, updateUser } = useContext(UserContext);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getUser(id).then((user) => {
        form.setFieldsValue({
          name: user.name,
          email: user.email,
        });
      });
    }
  }, [id]);

  const onFinish = async (values) => {
    setLoading(true);
    const userData = { name: values.name, email: values.email };

    try {
      if (id) {
        await updateUser(id, userData);
        message.success("User updated successfully");
      } else {
        await addUser(userData);
        message.success("User added successfully");
      }
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      message.error("Failed to perform operation");
      setLoading(false);
    }
  };

  return (
    <div className="">
      <div>
        <h2 className="m-6 font-sans underline">
          {id ? "Edit User" : "Please  add  a new user"}
        </h2>
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          initialValues={{ name: "", email: "" }}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name!" }]}
            className="w-80"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email address!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item className="text-center">
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="bg-blue-500 w-52"
            >
              {id ? "Update" : "Add"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default UserForm;
