import * as React from 'react';
import styled from 'styled-components';

interface IErrorWarning {
  p?: string;
  m?: string;
  info?: string;
  align?: string;
  errors?: object;
  label: string | PropertyKey;
}

function ErrorWarning(props: IErrorWarning) {
  const { errors, label, info } = props;

  return (
    <StyledErrorWarning {...props}>
      {errors?.hasOwnProperty(label) && <p>{info}</p>}
    </StyledErrorWarning>
  );
}

export default ErrorWarning;

const StyledErrorWarning = styled.div`
  width: 100%;
  max-width: 320px;
  color: #c40550;
  font-weight: bolder;
  font-size: 10px;
  text-transform: uppercase;
  text-align: ${(props: IErrorWarning) => props.align || 'center'};
  padding: ${(props: IErrorWarning) => props.p};
  margin: ${(props: IErrorWarning) => props.m};

  p {
    overflow: hidden;
    border-right: 0.15em solid orange;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 0.15em; /* Adjust as needed */
    animation: typing 2s steps(40, end), blink-caret 0.75s step-end infinite;
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }
`;
