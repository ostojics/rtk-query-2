import React from 'react';

interface IProps extends React.HTMLProps<HTMLTableCellElement> {
  className?: string;
  children?: React.ReactNode;
}

export default function TableHeader({className = '', children, ...rest}: IProps) {
  return (
    <th className={`table__head ${className}`} {...rest}>
      {children}
    </th>
  );
}
