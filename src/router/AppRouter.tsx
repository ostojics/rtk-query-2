import {Routes} from 'constants/routes';

import Modal from 'components/Modal/Modal';
import ServerError from 'components/ServerErrors/SeverErrors';
import {ConnectedRouter} from 'connected-react-router';
import Dashboard from 'pages/dashboard/Dashboard';
import Home from 'pages/home/Home';
import Login from 'pages/login/Login';
import Register from 'pages/register/Register';
import {Switch, Route} from 'react-router-dom';
import {history} from 'utils/history/history';

import PrivateRoute from './PrivateRoute';

export default function AppRouter() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path={Routes.HOME} exact component={Home} />
        <Route path={Routes.LOGIN} exact component={Login} />
        <Route path={Routes.REGISTER} exact component={Register} />

        <PrivateRoute path={Routes.DASHBOARD} component={Dashboard} exact />
      </Switch>
      <ServerError />
      <Modal />
    </ConnectedRouter>
  );
}
