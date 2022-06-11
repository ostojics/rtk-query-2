import React from 'react';

interface IProps extends React.HTMLProps<HTMLTableCellElement> {
  className?: string;
  children?: React.ReactNode;
}

export default function TableCell({className = '', children, ...rest}: IProps) {
  return (
    <td className={`table__cell ${className}`} {...rest}>
      {children}
    </td>
  );
}
