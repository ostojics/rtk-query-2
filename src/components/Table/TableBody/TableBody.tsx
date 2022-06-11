import React from 'react';

interface IProps extends React.HTMLProps<HTMLTableSectionElement> {
  className?: string;
  children: React.ReactNode;
}

export default function TableBody({className = '', children, ...rest}: IProps) {
  return (
    <tbody className={`table__body ${className}`} {...rest}>
      {children}
    </tbody>
  );
}
