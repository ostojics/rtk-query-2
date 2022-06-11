import './Button.scss';

import {ButtonType, ButtonDisabled} from 'typescript/types/ButtonTypes';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: ButtonDisabled;
  type?: ButtonType;
  variant?: string;
}

const Button: React.FC<Props> = ({
  children,
  onClick = () => {},
  disabled = false,
  type = 'button',
  variant = 'primary',
}) => {
  return (
    <button disabled={disabled} onClick={onClick} type={type} className={`btn btn--${variant}`}>
      {children}
    </button>
  );
};

export default Button;
