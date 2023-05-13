import React, { useState } from 'react';
import ExceptionHandler from 'components/exceptionhandler/ExceptionHandler';
import { getServerMessage } from '../constants';
import ArrayIterator from '../arrayiterator/ArrayIterator';
import { Spinner, Heading, Switch } from '@chakra-ui/react';
import useFetch from './useFetch';
import * as s from './getter.module.scss';

//const payload = localStorage.getItem("jwt")

export default function Getter(props: { url: string }) {
  const [status, setStatus] = useState('');
  const { url } = props;
  const [data, active, setActive, isLoading, isError] = useFetch(url);
  const [response, setResponse] = React.useState(data?.result);
  const message = data?.response?.data?.message || data?.message;

  React.useEffect(() => {
    getServerMessage(message, setStatus);
  }, [message]);

  React.useEffect(() => {
    setResponse(data?.result);
  }, [active, data?.result]);

  return (
    <>
      <div className={s.switchContainer}>
        <Switch
          onChange={(evt) => {
            setActive(evt.target.checked);
          }}
          size="sm"
          checked
          colorScheme="red"
          defaultChecked={active}
        />
      </div>
      <div className={s.switchStatusPanel}>
        <label
          className={s.getter__label}
          color={active ? '#c40550' : '#999999'}
        >
          {active ? 'Datos habilitados' : 'Datos desabilitados'}
        </label>
      </div>
      <div className={s.getterContainer}>
        {isError && <div>An error ocurred...</div>}
        {isLoading && (
          <div>
           
            <h5 color="white">Loading...</h5>
          </div>
        )}
        <ArrayIterator data={data?.result} />
        {status && <ExceptionHandler message={status} />}
      </div>
    </>
  );
}

// npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4 @chakra-ui/icons

//OK. npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

