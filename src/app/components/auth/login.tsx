'use client';
import { Form, Input, Button } from '@arco-design/web-react';
import { useTranslations } from 'next-intl';
import { useRouter } from "next/navigation";
import { signIn } from 'next-auth/react';


const FormItem = Form.Item;

const Login = () => {
  const t = useTranslations('Auth');
  const [form] = Form.useForm();
  const router = useRouter();
  const handleSubmit = async () => {
    if (form) {
      const { username, password } = form.getFieldsValue();
      try {
        const response: any = await signIn("credentials", {
          username,
          password,
          redirect: false,
        });
        console.log({ response });
        if (!response?.error) {
          router.push("/");
          router.refresh();
        }

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Process response here
        console.log("Login Successful", response);
      } catch (error: any) {
        console.error("Login Failed:", error);
      }
    }
  };
  return (
    <Form form={form} style={{ width: 600 }} autoComplete='off'>
      <FormItem label={t('username')} field='username'>
        <Input placeholder='Please enter your username' normalize={v => v ? v.trim() : v} />
      </FormItem>
      <FormItem label={t('password')} field='password'>
        <Input.Password placeholder='Please enter your password' normalize={v => v ? v.trim() : v} />
      </FormItem>
      <FormItem wrapperCol={{ offset: 5 }}>
        <Button type='primary' onClick={handleSubmit}>Submit</Button>
      </FormItem>
    </Form>
  );
};

export default Login;