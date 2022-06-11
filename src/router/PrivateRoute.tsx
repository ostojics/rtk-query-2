import {Routes} from 'constants/routes';

import {Route, Redirect, useLocation, RouteProps} from 'react-router-dom';

export type PrivateRouteProps = {} & RouteProps;

export default function PrivateRoute({...routeProps}: PrivateRouteProps) {
  const currentLocation = useLocation();
  const user = localStorage.getItem('user');

  return user ? <Route {...routeProps} /> : <Redirect to={{pathname: Routes.HOME, state: {from: currentLocation}}} />;
}
