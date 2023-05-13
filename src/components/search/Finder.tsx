import * as React from 'react';
import { getRequestAll, getServerMessage } from './constants';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { Heading, Spinner } from '@chakra-ui/react';
import StatusHandler from './StatusHandler';
import StyledLabel from './StyledLabel';
import ReactSearch from '../common/ReactSearch';

interface IProps {
  allnames: string;
}

function GetByName(props: IProps) {
  const { allnames } = props;
  const [status, setStatus] = React.useState('');

  const { data, isError, isLoading } = useQuery('all-names', () =>
    getRequestAll(allnames)
  );
  const list = data?.result;
  const message = data?.message || data;

  React.useEffect(() => {
    getServerMessage(message, setStatus);
  }, [message]);

  return (
    <>
      <GetterContainer>
        <StyledLabel color="#222222">Búsqueda por nombre.</StyledLabel>
        <ReactSearch data={list} />
        {isError && <div>An error ocurred...</div>}
        {isLoading && (
          <div>
            <Spinner size="sm" color="white" />
            <Heading color="white">Loading...</Heading>
          </div>
        )}

        {status && <StatusHandler message={status} />}
      </GetterContainer>
    </>
  );
}

export default GetByName;

const GetterContainer = styled.div`
  width: 100%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-width: 320px;
  min-height: 250px;
`;
