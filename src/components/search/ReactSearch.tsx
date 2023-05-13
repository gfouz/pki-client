import { useState, useEffect, MouseEvent } from 'react';
import styled from 'styled-components';
import { Input, Tooltip } from '@chakra-ui/react';
import { useSnapshot } from 'valtio';
import store from './store';
import { state } from './store';
//import HorizonLine from './HorizonLine';
import StyledLabel from './StyledLabel';
import { IObjectPattern } from './constants';

interface IArrayPattern {
  data: IObjectPattern[];
}

const ReactSearch = ({ data }: IArrayPattern) => {
  const snap = useSnapshot(store);
  const snap2 = useSnapshot(state);

  const list = data?.map((item) => item.name);
  const [suggestions, setSuggestions] = useState(['']);
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [suggestionsActive, setSuggestionsActive] = useState(false);
  const [value, setValue] = useState<string | undefined>('');
  const [item, setItem] = useState<IObjectPattern | undefined>(
    data?.find((item) => item?.name === value)
  );
  const [click, setClick] = useState(false);

  const handleChange = (e: { target: { value: string } }) => {
    const query = e.target.value.toLowerCase();
    setValue(query);
    if (query.length > 1) {
      const filterSuggestions = list?.filter(
        (suggestion) => suggestion?.toLowerCase().indexOf(query) > -1
      );
      setSuggestions(filterSuggestions);
      setSuggestionsActive(true);
    } else {
      setSuggestionsActive(false);
    }
  };

  const handleClick = (e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) => {
    setSuggestions([]);
    setValue((e.target as HTMLElement).innerHTML);
    setSuggestionsActive(false);
    setClick(true);
  };

  const handleKeyDown = (e: { keyCode: number }) => {
    // UP ARROW
    if (e.keyCode === 38) {
      if (suggestionIndex === 0) {
        return;
      }
      setSuggestionIndex(suggestionIndex - 1);
    }
    // DOWN ARROW
    else if (e.keyCode === 40) {
      if (suggestionIndex - 1 === suggestions.length) {
        return;
      }
      setSuggestionIndex(suggestionIndex + 1);
    }
    // ENTER
    else if (e.keyCode === 13) {
      setValue(suggestions[suggestionIndex]);
      setSuggestionIndex(0);
      setSuggestionsActive(false);
    }
  };

  const Suggestions = () => {
    return (
      <ul className="suggestions">
        {suggestions?.map((suggestion, index) => {
          return (
            <li
              className={index === suggestionIndex ? 'active' : ''}
              key={index}
              onClick={(e) => handleClick(e)}
              style={{ listStyleType: 'none', cursor: 'pointer' }}
            >
              {suggestion}
            </li>
          );
        })}
      </ul>
    );
  };

  const styles = {
    border: '1px solid green',
  };

  useEffect(() => {
    setItem(data?.find((item) => item.name === value));
  }, [value]);

  const handleClickOnItem = (item: IObjectPattern | undefined) => {
    snap.setStack(item);
    snap2.setOption('modificar');
  };

  return (
    <Searchbox>
      <Input
        className="searchbox__input"
        type="text"
        value={value}
        variant="outline"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {suggestionsActive && <Suggestions />}
      {!suggestionsActive && click ? (
        <UnorderedList onClick={() => handleClickOnItem(item)}>
          <Tooltip label="Haga clic para modificar!">
            <ListContainer>
              <ListItem className={item?.enabled ? 'list__item' : 'disabled'}>
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
                    {item?.type}
                  </StyledLabel>
                </IteratorHeader>
                <p style={{ textTransform: 'uppercase' }}>
                  {' '}
                  {item?.name ? item?.name : null}
                </p>
                <p> {item?.ci ? `Carnet: ${item?.ci}` : null}</p>
                <p> {item?.tome ? `Tomo: ${item?.tome}` : null}</p>
                <p> {item?.folio ? `Folio: ${item?.folio}` : null}</p>
                <p> {item?.email ? `Correo: ${item?.email}` : null} </p>
                <p> {item?.Rol ? `Rol: ${item?.Rol?.name}` : null} </p>
                <p>
                  {' '}
                  {item?.type === 'funcionalidad:'
                    ? `Pertenece a: ${item?.Rol?.name}`
                    : null}{' '}
                </p>
                <p> {item?.User ? `Usuario: ${item?.User?.name}` : null} </p>
                <p> {item?.User ? `Correo: ${item?.User?.email}` : null} </p>
                <p>
                  {' '}
                  {item?.EntidadesRegistro
                    ? `Oficina: ${item?.EntidadesRegistro.name}`
                    : null}{' '}
                </p>
                <p>
                  {' '}
                  {item?.Organismo
                    ? `Organismo: ${item?.Organismo?.name}`
                    : null}{' '}
                </p>
                <p> {item?.price ? `Precio: ${item?.price}` : null}</p>
                <p> {item?.range ? `Rango: ${item?.range}` : null}</p>
                <p> {item?.phone ? `Tel: ${item?.phone}` : null}</p>
                <p>
                  {' '}
                  {item?.Provincia
                    ? `Pertenece a: ${item?.Provincia?.name}`
                    : null}
                </p>
                <p>
                  {' '}
                  {item?.Municipio
                    ? `Pertenece a municipio: ${item?.Municipio?.name}`
                    : null}
                </p>
                <p>
                  {' '}
                  {item?.Municipio
                    ? `municipios: ${item?.Municipio?.name}`
                    : null}
                </p>
                <p> {item?.address ? `Domicilio: ${item?.address}` : null}</p>
                <p style={{ color: item?.enabled ? '#ff0000' : '#999999' }}>
                  {item?.enabled === true
                    ? 'Estado: habilitado'
                    : 'Estado: desabilitado'}
                </p>
                <AssociatedList>
                  {item?.Municipios ? (
                    <StyledLabel color="orange" space="5px">
                      Municipios:
                    </StyledLabel>
                  ) : null}

                  {item?.Rol?.Funcionalidades ? (
                    <StyledLabel color="orange" space="5px">
                      Funcionalidades:
                    </StyledLabel>
                  ) : null}
                  {item?.EmpresasInstituciones ? (
                    <StyledLabel color="orange" space="5px">
                      Empresas o instituciones:
                    </StyledLabel>
                  ) : null}

                  {item?.Municipios
                    ? item.Municipios.map((fn: any) => (
                        <ul key={String(fn.id)}>
                          <AssociatedItems>{fn.name}</AssociatedItems>
                        </ul>
                      ))
                    : null}
                  {item?.Rol?.Funcionalidades
                    ? item?.Rol?.Funcionalidades.map((fn: any) => (
                        <ul key={String(fn.id)}>
                          <AssociatedItems>{fn.name}</AssociatedItems>
                        </ul>
                      ))
                    : null}

                  {item?.EntidadesRegistros
                    ? item.EntidadesRegistros.map((fn: any) => (
                        <ul key={String(fn.id)}>
                          <AssociatedItems>{fn.name}</AssociatedItems>
                        </ul>
                      ))
                    : null}
                  {item?.EmpresasInstituciones
                    ? item.EmpresasInstituciones.map((fn: any) => (
                        <ul key={String(fn.id)}>
                          <AssociatedItems>{fn.name}</AssociatedItems>
                        </ul>
                      ))
                    : null}
                </AssociatedList>
              </ListItem>
            </ListContainer>
          </Tooltip>
        </UnorderedList>
      ) : null}
    </Searchbox>
  );
};

export default ReactSearch;

const Searchbox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .suggestions {
    color: #0f5bff;
    font-weight: bolder;
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

  min-height: 300px;
  padding: 1em;
  border-radius: 10px;
  box-shadow: 1px 1px 10px #222222;
  &:hover {
    color: #222222;
    letter-spacing: 1.2px;
    font-size: 1.2em;
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
