interface CommonPattern {
  id: number;
  name: string;
  enabled: boolean;
}
export interface Representante extends CommonPattern {
  ci: string;
  tome: string;
  folio: string;
  phone: string;
  namer: string;
  namerCharge: string;
}
export interface Funcionalidad extends CommonPattern {
  rolId: string;
}
export interface Rol extends CommonPattern {
  funcionalidades: Funcionalidad[];
}
export interface User extends CommonPattern {
  email: string;
  password: string;
  rolId: string;
}
export interface Provincia extends CommonPattern {}
export interface Organismo extends CommonPattern {}
export interface Municipio extends CommonPattern {
  provinciaId: string;
}
export interface EmpresaInstitucion extends CommonPattern {
  municipioId: string;
  organismoId: string;
}
export interface DTO {
  //simple properties.
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
  userId?: string;
  address?: string;
  enabled?: boolean;
  password?: string;
  namerCharge?: string;
  ProvinciaId?: string;
  provinciaId?: string;
  organismoId?: string;
  municipioId?: string;
  finalidadId?: string;
  namerCharger?: string;
  nominationTemplate?: string;
  //Models or objects from server.
  Rol?: Rol;
  Rols?: Rol[];
  User?: User;
  Usarios?: User[];
  Organismo?: Organismo;
  Municipio?: Municipio;
  Municipios?: Municipio[];
  Funcionalidades?: Funcionalidad[];
  EmpresasInstituciones?: EmpresaInstitucion;
}

//const BASE_URL = 'https://wonderful-pack.herokuapp.com';
//Introducción a Mongoose para MongoDB freeCodeCamp
