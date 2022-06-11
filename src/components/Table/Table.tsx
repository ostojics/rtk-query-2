import React from 'react';

import './Table.scss';

interface IProps {
  className?: string;
  children: React.ReactNode;
}

export default function Table({className = '', children, ...rest}: IProps) {
  return (
    <div className="table__responsive">
      <table className={`table ${className}`} {...rest}>
        {children}
      </table>
    </div>
  );
}
