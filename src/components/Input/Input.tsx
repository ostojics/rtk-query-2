import * as React from 'react';

type Props = {
  value: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<Props> = ({value, placeholder, onChange = () => {}}) => {
  return <input value={value} placeholder={placeholder} onChange={onChange} data-testid="input" />;
};

export default Input;
