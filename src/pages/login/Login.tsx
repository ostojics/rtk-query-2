import {Routes} from 'constants/routes';

import {useState} from 'react';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import Text from 'components/Text/Text';
import {setUserAC} from 'features/app/appSlice';
import {useAppDispatch} from 'hooks/useAppDispatch';
import LayoutNavbar from 'layouts/LayoutNavbar/LayoutNavbar';
import {useHistory} from 'react-router';
import './Login.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    if (username === 'admin' && password === 'admin') {
      const payload = {username: 'Admin'};

      dispatch(setUserAC(payload));
      history.push(Routes.DASHBOARD);
    } else {
      setError('Wrong username or password try "admin" "admin"');
    }
  };

  return (
    <LayoutNavbar pageName="login">
      <h1>Login view</h1>
      {error ? <Text tag="p">{error}</Text> : null}

      <Input
        value={username}
        placeholder="Enter username"
        onChange={(e) => {
          setUsername(e.target.value);
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
