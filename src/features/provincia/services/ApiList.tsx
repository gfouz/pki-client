import CreateProvincia from './CreateProvincia';
import UpdateProvincia from './UpdateProvincia';
import GetProvincia from './GetProvincia';
import FindProvincia from './FindProvincia';
import DeleteProvincia from './DeleteProvincia';

interface Api {
  name: string;
  api: React.ReactNode;
}

export const ApiList: Api[] = [
  {
    name: 'crear',
    api: <CreateProvincia  />,
  },
  {
    name: 'mostrar',
    api: <GetProvincia  />,
  },
  {
    name: 'buscar',
    api: <FindProvincia />,
  },
  {
    name: 'modificar',
    api: <UpdateProvincia />,
  },
  {
    name: 'eliminar',
    api: <DeleteProvincia />,
  },
];
