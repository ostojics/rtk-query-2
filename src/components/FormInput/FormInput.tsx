import React from 'react';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import {ButtonType, ButtonDisabled} from 'typescript/types/ButtonTypes';

interface Props {
  value: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  disabled?: ButtonDisabled;
  type?: ButtonType;
}

const FormInput: React.FC<Props> = ({
  value,
  placeholder,
  onChange = () => {},
  onClick = () => {},
  disabled = false,
  type = 'button',
}) => {
  return (
    <div data-testid="form-input">
      <Input value={value} placeholder={placeholder} onChange={onChange} />
      <Button onClick={onClick} disabled={disabled} type={type}>
        Submit
      </Button>
    </div>
  );
};

export default FormInput;
