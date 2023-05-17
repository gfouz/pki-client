import * as React from 'react';
import { useSnapshot } from 'valtio';

import store from 'store/store';
import { state } from 'store/store';
import s from './arrayiterator.module.scss';

interface SomeData {
  [key: string]: any;
}

interface SomeArray {
  data: SomeData[];
}

function ArrayIterator({ data }: SomeArray) {
  const [status, setStatus] = React.useState('');
  const [downloadUrl, setDownloadUrl] = React.useState(null);
  const snap = useSnapshot(store);
  const snap2 = useSnapshot(state);

  const handleClick = (item: SomeArray) => {
    snap.setStack(item);
    snap2.setOption('modificar');
  };

  return (
    <>
      <div className={s.iteratorContainer}>
        {Array.isArray(data) ? (
          data?.map((item) => {
            const { id, name, enabled } = item;
            return (
              <ul className={s.unorderedList} key={id}>
                <div className={s.listContainer}>
                  <li className={enabled ? s.listItem : s.disabled}>
                    <p style={{ textTransform: 'uppercase' }}>
                      {' '}
                      {name ? name : null}
                      <p> {`${enabled}`}</p>
                    </p>
                  </li>
                </div>
              </ul>
            );
          })
        ) : (
          <p className="default-message">Sin datos aun!</p>
        )}
      </div>
    </>
  );
}

export default ArrayIterator;
