import { useSnapshot } from 'valtio';
import { state } from 'store/store';
import * as s from './createprovincia.module.scss';
import Getter from '../getter/Getter';
import CreateProvincia from '../create/CreateProvincia';

const ProvinciaCrud = ()=> {
  const snap = useSnapshot(state);
  const selected = snap.opt;
  let component;
  switch(selected) {
    case 'mostrar':
      component = <Getter />
    break
    case 'crear':
      component = <CreateProvincia />
    break
    case 'eliminar':
      component = <h1>Eliminar</h1>
    break
    case 'buscar':
      component = <h1>Buscar</h1>
    break
    case 'actualizar':
      component = <h1>Actualizar</h1>
    break
    default:
      component = <h1>Nothing yet!</h1>
  }
  return(
    <div className={s.crud_container}>
      { component }
    </div>
    )
}

export default ProvinciaCrud;