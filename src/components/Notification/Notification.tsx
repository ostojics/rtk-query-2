import './Notification.scss';

interface IProps {
  message: string;
  variant: 'error' | 'success';
}

export default function Notification({message, variant}: IProps) {
  return <div className={`notification notification--${variant}`}>{message}</div>;
}
