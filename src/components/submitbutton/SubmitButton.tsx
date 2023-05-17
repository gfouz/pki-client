import * as React from 'react';
import { Spinner } from '@chakra-ui/react';
import s from './submitbutton.module.scss';
import ResetButton from './ResetButton';

interface ButtonProps {
  buttonstate: boolean;
}

function SubmitButton(props: ButtonProps) {
  const { buttonstate } = props;
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(buttonstate);
  }, [buttonstate]);
  return (
    <div className={s.buttonContainer}>
      <button className={s.submitButton}>
        {loading ? (
          <span>
            <Spinner />
          </span>
        ) : (
          <span>Enviar</span>
        )}
      </button>
      <ResetButton />
    </div>
  );
}

export default SubmitButton;
