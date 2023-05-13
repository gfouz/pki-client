import * as React from 'react';
import * as s from './exceptionhandler.module.scss';

interface IComponentProps {
  message: string;
}

function ExceptionHandler({ message }: IComponentProps) {
  const [status, setStatus] = React.useState('');
  React.useEffect(() => {
    setStatus(message);
  }, [message]);

  return (
      <div className={s.container}>
        <p>{status}</p>
      </div>
  );
}

export default ExceptionHandler;

