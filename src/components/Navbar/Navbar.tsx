import {Routes} from 'constants/routes';

import React from 'react';

import {Link} from 'react-router-dom';

interface Props {}

const Navbar: React.FC<Props> = () => {
  return (
    <nav className="d-flex justify-content-end" data-testid="nav">
      <Link className="px-3" to={Routes.HOME}>
        Home
      </Link>
      <Link className="px-3" to={Routes.LOGIN}>
        Login
      </Link>
      <Link className="px-3" to={Routes.REGISTER}>
        Register
      </Link>
    </nav>
  );
};

export default Navbar;
