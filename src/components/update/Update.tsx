import * as React from 'react';
import { useSnapshot } from 'valtio';
import styled from 'styled-components';
import { useMutation } from 'react-query';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Heading } from '@chakra-ui/react';
import { Switch, FormLabel } from '@chakra-ui/react';

import store from './store';
import { state } from './store';
import StatusHandler from './StatusHandler';
import { putRequestById, IFormInput } from './constants';
import TextInput from './TextInput';
import SubmitButton from '../common/SubmitButton';
import StyledLabel from './StyledLabel';

interface IProps {
  url: string;
  msg?: string;
}

function Update(props: IProps) {
  const info = 'se requiere nombres compuestos sin números';
  const snap = useSnapshot(store);
  const snap2 = useSnapshot(state);

  const { stack } = snap;
  const { url, msg } = props;
  const [status, setStatus] = React.useState('');
  const [active, setActive] = React.useState(Boolean(stack.enabled));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const response = useMutation((data: any) =>
    putRequestById(data, url, stack.id)
  );

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    response.mutateAsync(data);
  };
  const message = response?.data?.message || response?.data;

  React.useEffect(() => {
    message && setStatus(message);
    message === 'updated' && snap2.setOption('mostrar');
  }, [message]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UpdaterContainer>
          <Heading size="md" color="#777777">
            {stack.name}
          </Heading>

          <StyledLabel color="#222222">Modificar nombre</StyledLabel>
          <TextInput
            info={info}
            required
            label="name"
            errors={errors}
            register={register}
            defaultValue={stack.name}
          />

          <FormLabel htmlFor="enabled" m="0" color="#333333">
            <Heading size="sm" color={active ? '#e2023d' : '#99999970'}>
              {active ? 'Habilitado' : 'Deshabilitado'}
            </Heading>
          </FormLabel>
          <Switch
            {...register('enabled', {
              onChange: (evt) => {
                setActive(evt.target.checked);
              },
            })}
            id="enabled"
            size="sm"
            checked
            colorScheme="red"
            defaultChecked={Boolean(stack.enabled)}
          />

          <SubmitButton buttonstate={response?.isLoading} />
          {status && <StatusHandler message={status} />}
        </UpdaterContainer>
      </form>
    </>
  );
}

export default Update;

const UpdaterContainer = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-width: 300px;
  min-height: 300px;
  @media (min-width: 700px) {
    min-width: 400px;
  }
`;
