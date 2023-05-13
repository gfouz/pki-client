import { proxy } from 'valtio';

interface IStackPattern {
  [key: string]: any;
}

//this state is for storing incoming data from server.
interface IStoreData {
  stack: IStackPattern;
  setStack: (info: IStackPattern | undefined) => IStackPattern;
}
const store: IStoreData = proxy({
  stack: {},
  setStack: (info) => Object.assign(store.stack, info),
});

interface IObject {
  [key: string]: any;
}
interface IUser {
  [key: string]: any;
}

interface IUserStore {
  user: IObject;
  setUser: (newuser: IUser) => IUser;
}
//State for storing user data from server
export const users: IUserStore = proxy({
  user: {},
  setUser: (newuser) => Object.assign(users.user, newuser),
});

//this another is for sidebar or menu options.
interface IStateData {
  opt: string;
  setOption: (option: string) => string;
}
export const state: IStateData = proxy({
  opt: 'mostrar',
  setOption: (option) => (state.opt = option),
});

//this is a switcher to open or close the sidebar.
interface ISwitcher {
  st: boolean;
  setTrue: () => void;
  setFalse: () => void;
  reverse: () => boolean;
}

export const switcher: ISwitcher = proxy({
  st: false,
  setTrue: () => (switcher.st = true),
  setFalse: () => (switcher.st = false),
  reverse: () => (switcher.st = !switcher.st),
});

export default store;
