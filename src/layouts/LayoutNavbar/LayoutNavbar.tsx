import React from 'react';

import './LayoutNavbar.scss';

import Navbar from 'components/Navbar/Navbar';

interface Props {
  children: React.ReactNode;
  pageName: string;
}

const LayoutNavbar = ({children, pageName}: Props) => {
  return (
    <div className={`container page-${pageName}`}>
      <Navbar />
      {children}
    </div>
  );
};

export default LayoutNavbar;
