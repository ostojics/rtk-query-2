import React from 'react';

import Account from './Icons/Account';

interface Props {
  icon: string;
}

const Icon: React.FC<Props> = ({icon}) => {
  switch (icon) {
    case 'account':
      return <Account />;
    default:
      return <></>;
  }
};

export default Icon;
