import React from 'react';

interface IProps extends React.HTMLProps<HTMLTableRowElement> {
  className?: string;
  children: React.ReactNode;
}

export default function TableRow({className = '', children, ...rest}: IProps) {
  return (
    <tr className={`table__row ${className}`} {...rest}>
      {children}
    </tr>
  );
}
