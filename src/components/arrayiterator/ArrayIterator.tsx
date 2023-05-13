import * as React from 'react';
import axios from 'axios';
import { useSnapshot } from 'valtio';
import { useQuery } from 'react-query';
import { Tooltip, HStack } from '@chakra-ui/react';

import store from './store';
import { state } from './store';
import StyledLabel from './StyledLabel';
import { OneButton } from './OneButton';
import { downloadVaucher } from './constants';
import * as s from './arrayiterator.module.scss';

interface IFlexibleStructure {
  [key: string]: any;
}

interface IObjectArray {
  data: IFlexibleStructure[];
}

function ArrayIterator({ data }: IObjectArray) {
  const [status, setStatus] = React.useState('');
  const [downloadUrl, setDownloadUrl] = React.useState(null);
  const snap = useSnapshot(store);
  const snap2 = useSnapshot(state);

  const { data: voucher, isLoading } = useQuery('downloadUrl', () =>
    downloadVaucher()
  );

  const handleClick = (item: IFlexibleStructure) => {
    snap.setStack(item);
    snap2.setOption('modificar');
  };
  const message = voucher?.data?.message || voucher?.data;

  React.useEffect(() => {
    message && setStatus(message);
  }, [message]);

  console.log(status.message);
  return (
    <>
      <div className={s.iteratorContainer}>
        {Array.isArray(data) ? (
          data?.map((item) => {
            const {
              id,
              ci,
              Rol,
              User,
              tome,
              type,
              folio,
              email,
              price,
              range,
              phone,
              enabled,
              address,
              Provincia,
              Municipio,
              Municipios,
              Organismo,
              Representantes,
              Funcionalidades,
              EntidadesRegistro,
              EntidadesRegistros,
              EmpresasInstituciones,
            } = item;
            return (
              <ul className={s.unorderedList} key={id}>
                <div className={s.listContainer}>
                  <li className={enabled ? s.listItem : s.disabled}>
                    <IteratorHeader>
                      <IteratorLogo />
                      <StyledLabel
                        color="#009688"
                        fam="signika"
                        size="1.1em"
                        space="5px"
                        m="0 0.5em"
                        capit
                      >
                        {type ? type : null}
                      </StyledLabel>
                    </IteratorHeader>
                    <p style={{ textTransform: 'uppercase' }}>
                      {' '}
                      {item?.name ? item?.name : null}
                    </p>
                    <p> {ci ? `Carnet: ${ci}` : null}</p>
                    <p> {tome ? `Tomo: ${tome}` : null}</p>
                    <p> {folio ? `Folio: ${folio}` : null}</p>
                    <p> {email ? `Correo: ${email}` : null} </p>
                    <p> {price ? `Precio: ${price}` : null}</p>
                    <p> {range ? `Rango: ${range}` : null}</p>
                    <p> {phone ? `Tel: ${phone}` : null}</p>
                    <p> {address ? `Domicilio: ${address}` : null}</p>
                    <p style={{ color: enabled ? '#ff0000' : '#999999' }}>
                      {enabled === true
                        ? 'Estado: habilitado'
                        : 'Estado: desabilitado'}
                    </p>
                    <p> {Rol?.name ? `Rol: ${Rol?.name}` : null} </p>
                    <p> {User?.name ? `Usuario: ${User?.name}` : null} </p>
                    <p> {User?.email ? `Correo: ${User?.email}` : null} </p>
                    <p>
                      {' '}
                      {Provincia?.name
                        ? `Pertenece a: ${Provincia?.name}`
                        : null}
                    </p>
                    <p>
                      {Municipio?.name
                        ? `Pertenece a municipio: ${Municipio?.name}`
                        : null}
                    </p>
                    <p>
                      {' '}
                      {Organismo?.name
                        ? `Organismo: ${Organismo?.name}`
                        : null}{' '}
                    </p>
                    <p>
                      {EntidadesRegistro?.name
                        ? `Oficina: ${EntidadesRegistro?.name}`
                        : null}
                    </p>

                    <AssociatedList>
                      {Funcionalidades ? (
                        <StyledLabel color="#333333" space="5px">
                          Funcionalidades:
                        </StyledLabel>
                      ) : null}

                      {Rol?.Funcionalidades ? (
                        <StyledLabel color="#333333" space="5px">
                          Funcionalidades:
                        </StyledLabel>
                      ) : null}

                      {Funcionalidades
                        ? Funcionalidades.map((fn: any) => (
                            <ul key={String(fn.id)}>
                              <AssociatedItems>{fn.name}</AssociatedItems>
                            </ul>
                          ))
                        : null}
                      {Rol?.Funcionalidades
                        ? Rol?.Funcionalidades.map((fn: any) => (
                            <ul key={String(fn.id)}>
                              <AssociatedItems>{fn.name}</AssociatedItems>
                            </ul>
                          ))
                        : null}
                      {Municipios ? (
                        <StyledLabel color="#333333" space="5px">
                          Municipios:
                        </StyledLabel>
                      ) : null}
                      {Municipios
                        ? Municipios.map((fn: any) => (
                            <ul key={String(fn.id)}>
                              <AssociatedItems>{fn.name}</AssociatedItems>
                            </ul>
                          ))
                        : null}
                      {EmpresasInstituciones ? (
                        <StyledLabel color="" space="5px">
                          Empresas o instituciones:
                        </StyledLabel>
                      ) : null}
                      {EmpresasInstituciones
                        ? EmpresasInstituciones.map((fn: any) => (
                            <ul key={String(fn.id)}>
                              <AssociatedItems>{fn.name}</AssociatedItems>
                            </ul>
                          ))
                        : null}
                      {EntidadesRegistros
                        ? EntidadesRegistros.map((fn: any) => (
                            <ul key={String(fn.id)}>
                              <AssociatedItems>{fn.name}</AssociatedItems>
                            </ul>
                          ))
                        : null}
                      {Representantes ? (
                        <StyledLabel color="#333333" space="5px">
                          Representantes:
                        </StyledLabel>
                      ) : null}
                      {Representantes
                        ? Representantes.map((fn: any) => (
                            <ul key={String(fn.id)}>
                              <AssociatedItems>{fn.name}</AssociatedItems>
                            </ul>
                          ))
                        : null}
                    </AssociatedList>
                  </li>
                  <Tooltip label="Haga clic para modificar!">
                    <ButtonsContainer>
                      <UpdateButton onClick={() => handleClick(item)}>
                        Modificar
                      </UpdateButton>
                      {type === 'representante' ? (
                        <DownloadLink
                          donwnload={` ${ci}.pdf `}
                          href={`http://localhost:4000/voucher/${ci}`}
                        >
                          Descargar Documento
                        </DownloadLink>
                      ) : null}
                    </ButtonsContainer>
                  </Tooltip>
                  <StyledLabel>{status?.message}</StyledLabel>
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

const IteratorContainer = styled.div`
  width: 100%;
  margin: 2em 0;
  padding: 0.5em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .default-message {
    color: #e91e63;
    text-align: center;
    font-weight: bolder;
    text-transform: uppercase;
  }

  .disabled {
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 0.7em;

    padding: 0.7em;
    color: #999999;
    text-align: left;
    list-style-type: none;
  }
`;
const IteratorHeader = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
`;
const IteratorLogo = styled.img.attrs({
  src: './images/icon.png',
  alt: 'logo',
})`
  width: 25px;
  height: auto;
`;
const ListContainer = styled.div`
  cursor: pointer;
  position: relative;
  min-height: 300px;
  padding: 1em;
  border-radius: 10px;
  box-shadow: 1px 1px 10px #222222;
  &:hover {
    color: #222222;
    letter-spacing: 1.1px;
  }
`;
const UnorderedList = styled.ul`
  margin: 0.2em;
`;
const ListItem = styled.li`
  font-weight: bolder;
  font-size: 0.7em;
  padding: 0.7em;
  color: #777777;
  text-align: left;
  list-style-type: none;
  width: 320px;
`;
const AssociatedList = styled.div`
  margin: 1em 0;
`;
const AssociatedItems = styled.li`
  margin: 0.2em 0;
  color: #777777;
  list-style-type: none;
`;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const UpdateButton = styled(OneButton)`
  &:hover {
    color: #000000;
    background-color: #00bcd4;
  }
`;
const DownloadLink = styled.a`
  cursor: pointer;
  padding: 0.2em 1.3em;
  margin: 0 0.2em;
  font-weight: bolder;
  border: none;
  border-radius: 10px;
  outline: none;
  letter-spacing: 2px;
  color: #000000;
  background-color: #00bcd4;
`;
