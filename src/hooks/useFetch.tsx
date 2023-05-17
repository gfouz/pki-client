import * as React from 'react';
import { useQuery } from 'react-query';
import { getAll } from 'services/api';

const useFetch = (url: string) => {
  const [state, setState] = React.useState(true);
  const toggle = React.useCallback(() => setState((state) => !state), []);

  const { data, isLoading, isError, refetch } = useQuery('some-data', () =>
    getAll(`${url}`)
  );
  React.useEffect(() => {
    refetch();
  }, [state]);
  return [data, state, toggle, isLoading, isError];
};
export default useFetch;
