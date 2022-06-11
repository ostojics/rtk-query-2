import {useState} from 'react';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import Text from 'components/Text/Text';
import {useSignInMutation} from 'features/auth/authApiSlice';
import LayoutNavbar from 'layouts/LayoutNavbar/LayoutNavbar';
import {LoginDTO} from 'typescript/dto/LoginDTO';
import './Login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signIn] = useSignInMutation();

  const handleSubmit = async () => {
    try {
      const data: LoginDTO = {
        email,
        password,
      };

      await signIn(data).unwrap();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  return (
    <LayoutNavbar pageName="login">
      <h1>Login view</h1>

      <Input
        value={email}
        placeholder="Enter email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Input
        value={password}
        placeholder="Enter password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button onClick={handleSubmit}>
        <Text tag="span">Submit</Text>
      </Button>
    </LayoutNavbar>
  );
};

export default Login;
