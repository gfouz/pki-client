import * as React from 'react';
import { useSnapshot } from 'valtio';
import { state } from 'store/store';
import * as s from './selector.module.scss';

function Selector() {
  const [count, setCount] = React.useState(0);
  const  option = [
    'mostrar',
    'buscar',
    'crear',
    'actualizar',
    'eliminar',
  ];

  const handleClick = () => {
    setCount((st) => st + 1);
  };

  React.useEffect(() => {
    if (count > 4) setCount(0);
  }, [count]);

  //Global state with valtio.
  const snap = useSnapshot(state);
  snap.setOption(option[count]);
  const selected = snap.opt;

  return (
    <button onClick={handleClick} className={s.selectorButton}>
      {selected}
    </button>
  );
}

export default Selector;
