import React from 'react';

interface IProps extends React.HTMLProps<HTMLTableSectionElement> {
  className?: string;
  children: React.ReactNode;
}

export default function TableHeader({className = '', children, ...rest}: IProps) {
  return (
    <thead className={`table__header ${className}`} {...rest}>
      {children}
    </thead>
  );
}
