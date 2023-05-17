import { useSnapshot } from 'valtio';
import { state } from 'store/store';
import styles from './provinciaApi.module.scss';

interface ApiProperties {
  name: string;
  api: React.ReactNode;
}
interface Api {
  list: ApiProperties[];
}
const ProvinciaApi = (props: Api) => {
  const { list } = props;
  const snap = useSnapshot(state);
  const selected = snap.opt;
  let component;
  {
    list.map((item) => {
      switch (selected) {
        case `${item.name}`:
          component = item.api;
          break;
      }
    });
  }
  return <div className={styles.container}>{component}</div>;
};

export default ProvinciaApi;
