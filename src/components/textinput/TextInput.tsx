import React from 'react';
import { Input, Tooltip } from '@chakra-ui/react';
import ErrorWarning from '../errorwarning/ErrorWarning';
import { DTO } from 'interfaces/interfaces';
import { Path, UseFormRegister } from 'react-hook-form';

type InputAttrs = {
  info?: string;
  errors: object;
  required?: boolean;
  defaultValue?: string;
  label: Path<DTO>;
  register: UseFormRegister<DTO>;
};
const TextInput = ({
  label,
  register,
  required,
  errors,
  defaultValue,
  info,
}:  InputAttrs ) => {
  return (
    <>
      <Tooltip label={info} hasArrow arrowSize={15}>
        <Input
          size="sm"
          type="text"
          cursor="pointer"
          variant="flushed"
          defaultValue={defaultValue}
          {...register(label, {
            pattern: /^[a-zA-Z\u00C0-\u017F\s]+$/,
            required,
          })}
        />
      </Tooltip>
      <ErrorWarning label={label} errors={errors} info={info} />
    </>
  );
};

export default TextInput;
