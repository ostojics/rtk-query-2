/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './Backdrop.scss';

interface Props {
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Backdrop: React.FC<Props> = ({onClick = () => {}}) => {
  return <div className="backdrop" onClick={onClick} data-testid="backdrop" role="button" aria-label="backdrop" />;
};

export default Backdrop;
