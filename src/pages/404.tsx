import styled from 'styled-components';

const NotFound = () => {
  return <StyledNotFound></StyledNotFound>;
};

export default NotFound;

const StyledNotFound = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('./images/notfound.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;
