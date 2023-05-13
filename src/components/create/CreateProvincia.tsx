import * as React from 'react';
import * as s from './createprovincia.module.scss';
import { useSnapshot } from 'valtio';
import store from 'store/store';
import { state } from 'store/store';
import ExceptionHandler from '../exceptionhandler/ExceptionHandler';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from 'react-query';
import { postRequest, IFormInput } from '../constants';
import SubmitButton from '../submitbutton/SubmitButton';
import TextInput from '../textinput/TextInput';

function CreateProvincia(props: { url: string; msg?: string }) {
  const info = 'se permiten nombres compuestos sin números';
  const { url, msg } = props;
  const [status, setStatus] = React.useState('');
  const snap = useSnapshot(store);
  const snap2 = useSnapshot(state);
  const { stack } = snap;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const response = useMutation((data: IFormInput) => postRequest(url, data));
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    response.mutateAsync(data);
  };
  const message = response?.data?.message || response?.data;

  React.useEffect(() => {
    message && setStatus(message);
    message === 'created' && snap2.setOption('mostrar');
  }, [message]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.card}>
          <label labelFor="name" className={s.card__label}>
            Nombre
          </label>
          <TextInput
            label="name"
            register={register}
            errors={errors}
            required
            info={info}
          />
          <SubmitButton buttonstate={response?.isLoading} />
          {status && <ExceptionHandler message={status} />}
        </div>
      </form>
    </>
  );
}

export default CreateProvincia;
