import * as React from 'react';
import axios from 'axios';
import { ResponsiveValue } from '@chakra-ui/react';

const BASE_URL = 'http://localhost:4000';

const jwt = localStorage.getItem('jwt');
// Empty value is to be validated by the express middleware.
const token = jwt ? jwt : 'empty';

export const axiosApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

interface IFns {
  id: number;
  name: string;
  path: string;
  enabled: boolean;
  rolId: number;
}

interface justName {
  name: string;
  email?: string;
}

export type IFormInput = {
  Funcionalidades?: any;
  User?: justName;
  Usarios?: any;
  Rol?: justName;
  Municipios?: any;
  Municipio?: justName;
  Organismo?: justName;
  EmpresasInstitucione?: justName;
  id?: string;
  id2?: string;
  rol?: string;
  ci?: string | undefined;
  erId?: string;
  eReg?: string;
  eiId?: string;
  name?: string;
  tome?: string;
  path?: string;
  time?: string;
  price?: string;
  range?: string;
  folio?: string;
  rolId?: number;
  RolId?: number;
  email?: string;
  phone?: string;
  namer?: string;
  funct?: IFns[];
  namerCharger?: string;
  userId?: string;
  address?: string;
  enabled?: boolean;
  password?: string;
  nominationTemplate?: string;
  namerCharge?: string;
  ProvinciaId?: string;
  provinciaId?: string;
  organismoId?: string;
  municipioId?: string;
  finalidadId?: string;
};

export type IStoreProps = IFormInput;
export type IList = IFormInput;

export interface IListProps {
  icon: React.ReactNode;
  option: string;
  comp: React.ReactNode;
}

//Types for FormsIterator
export interface IOptions {
  options: IListProps[];
}
type TForm = {
  option: string;
  comp: React.ReactNode;
};
//---------------------//

export interface IProps {
  id?: string;
  url?: string;
  label?: string;
  queryKey?: string;
  labelForId?: string;
  labelForName?: string;
}

interface ISuggestedWords {
  ci: string;
  tome: string;
  folio: string;
  name: string;
  tel: string;
  file: string;
  tutor: string;
  occupancy: string;
  alpha: string;
  numeric: string;
  select: string;
  email: string;
  password: string;
}
export const info: ISuggestedWords = {
  ci: 'Require 11 dígitos y ser mayor de 18 años!',
  tome: 'Requiere 3 dígitos para el tomo!',
  folio: 'Requeridos 3 dígitos para el folio!',
  name: 'Requiere nombres compuestos sin números',
  tel: 'Requiere números nacionales de 8 dígitos ',
  alpha: 'Requiere letras, números y espacios',
  select: 'esta selección es requerida',
  tutor: 'Este dato solo admite letras.',
  occupancy: 'Este dato solo admite letras',
  file: 'Adjunte documento del nombramiento',
  numeric: 'Requiere números enteros o decímales',
  email: 'Debe contener @ y un formato correcto',
  password:
    'Obligatorio: al menos una letra mayuscula y minuscula, número, símbolo y minimo 8 caracteres, por ejemplo : " clave-C123 " ',
};

/*-----------css styles and Chakra attributes types.--------*/
export type chakraProps = {
  size:
    | ResponsiveValue<(string & unknown) | 'sm' | 'md' | 'lg' | 'xs'>
    | undefined;
  type: React.HTMLInputTypeAttribute | undefined;
  variant:
    | ResponsiveValue<
        (string & unknown) | 'outline' | 'flushed' | 'unstyled' | 'filled'
      >
    | undefined;
};

export async function postRequest(
  path: string,
  data: IFormInput
): Promise<IFormInput | any> {
  try {
    const res = await axiosApi.post<IFormInput>(path, data);
    const { data: result } = res;
    return result;
  } catch (error: any) {
    return error?.message;
  }
}

export async function putRequestById(
  data: IFormInput,
  path: string,
  id: string | undefined
): Promise<IFormInput | any> {
  try {
    const res = await axiosApi.put<IFormInput>(`/${path}/${id}`, data);
    const result = res.data;
    return result;
  } catch (error: any) {
    return error?.message;
  }
}
export async function getRequestById(
  path: string,
  id: string | undefined
): Promise<IFormInput | any> {
  try {
    const res = await axiosApi.get<IFormInput>(`/${path}/${id}`);
    const result = res.data;
    return result;
  } catch (error: any) {
    return error?.message;
  }
}

export async function downloadVaucher(ci: string | undefined): Promise<any> {
  try {
    const res = await axios.get<any>(`http://localhost:4000/voucher`, {
      responseType: 'blob',
    });
    const result = res.data;
    return result;
  } catch (error: any) {
    return error?.message;
  }
}
export async function getByParams(
  path: string,
  params: string
): Promise<IFormInput | any> {
  try {
    const res = await axiosApi.get<IFormInput>(`/${path}/${params}`);
    const result = res.data;
    return result;
  } catch (error: any) {
    return error?.message;
  }
}

/* Do not repeat yourself, but here is a kind of
     convention. */
export async function getRequestEnabled(
  path: string
): Promise<IFormInput[] | any> {
  try {
    const res = await axiosApi.get<IFormInput[]>(path);
    const result = res.data;
    return result;
  } catch (error: any) {
    return error?.message;
  }
}

export async function getRequestAll(path: string): Promise<IFormInput[] | any> {
  try {
    const res = await axiosApi.get<IFormInput[]>(path);
    const result = res.data;
    return result;
  } catch (error: any) {
    return error?.message;
  }
}

export async function getByDoubleAssociation(
  id: string
): Promise<IFormInput | any> {
  try {
    const res = await axiosApi.get<IFormInput>(
      `/empresas-instituciones/municipio/${id}`
    );
    const result = res.data;
    return result;
  } catch (error: any) {
    return error?.message;
  }
}

export const getServerMessage = (
  message: any,
  setStatus: { (value: React.SetStateAction<string>): void; (arg0: any): void }
) => {
  setStatus(message);
};

//Posible incoming messages from server.
export const messages = [
  'ok',
  'updated',
  'enabled',
  'associated',
  'created',
  'accepted',
  'not-authorized',
  'bad-request',
  'Bad Request',
  'Forbidden',
  'Network Error',
  'unprocessable',
  'Unprocessable-data',
  'not-found',
  'Not Found',
  'found by id',
  'gotten-by-id',
  'Unprocessable Entity',
  'Request failed with status code 401',
  'Request failed with status code 422',
];

const functionality = {
  id: 0,
  name: '',
  path: '',
  enabled: true,
};

export const initialState = {
  name: '',
  ci: 0,
  rol: '',
  tome: 0,
  folio: 0,
  email: '',
  price: '',
  range: '',
  phone: '',
  address: '',
  enabled: true,
  funct: [],
};

interface IFns {
  id: number;
  name: string;
  path: string;
  enabled: boolean;
  rolId: number;
}

export interface Item {
  name: string;
  ci: string;
  rol: string;
  tome: string;
  folio: string;
  email: string;
  price: string;
  range: string;
  phone: string;
  funct: IFns[];
  address: string;
  enabled: boolean;
}

export interface ItemArray {
  data: Item[];
}

export interface IRol {
  id: number;
  name: string;
  enabled: boolean;
}

//this is an interface for ArrayIterator component.
type TOnlyName = {
  name: string;
};

type TRol = {
  name: string;
  Funcionalidades: TOnlyName[];
};
type TUser = {
  name: string;
  email: string;
};

export interface IObjectPattern {
  Funcionalidades: any;
  id: React.Key | null | undefined;
  ci: number;
  enabled: boolean;
  type: string;
  name: string;
  tome: number;
  folio: number;
  email: string;
  Rol: TRol;
  User: TUser;
  EntidadesRegistro: TOnlyName;
  Organismo: TOnlyName;
  price: number;
  range: string;
  phone: number;
  Provincia: TOnlyName;
  Municipio: TOnlyName;
  address: string;
  Municipios: TOnlyName[];
  EmpresasInstituciones: TOnlyName[];
  EntidadesRegistros: TOnlyName[];
}

//const BASE_URL = 'https://wonderful-pack.herokuapp.com';
