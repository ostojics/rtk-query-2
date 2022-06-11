import React from 'react';

import './TableZeroState.scss';

interface IProps {
  children: React.ReactNode;
}

export default function TableZeroState({children}: IProps) {
  return (
    <tr className="table__zero-state">
      <td colSpan={42}>
        <div>{children}</div>
      </td>
    </tr>
  );
}
