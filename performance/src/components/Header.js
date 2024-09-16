import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import Penguin from '../images/penguinFull.jpg';

function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <StyledImage src={Penguin} alt="Penguin" />
      </Link>
      <div>Performance Penguins</div>
      <LinksDiv>
        <LinkElem to="/">Home</LinkElem>
        {' '}
        <LinkElem to="/data">Penguin Data</LinkElem>
        {' '}
        <LinkElem to="/game">Penguin Game</LinkElem>
      </LinksDiv>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const StyledImage = styled.img`
  max-height: 100px;
  margin-right: 10px;
  flex: 0 0 auto;
`;

const LinksDiv = styled.div`
  flex: 1 1 auto;
  text-align: right;
`;

const LinkElem = styled(NavLink)`
  color: blue;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: #61dafb;
  }
`;

export default Header;
