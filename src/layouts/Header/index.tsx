import React from 'react';
import styled from 'styled-components';

/* Components */
import { Nav } from '../../components/Navigation/Nav';
import { Settings } from '../../components/Settings';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
`;

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Nav />
      <Settings />
    </StyledHeader>
  );
};

export default Header;
