import React from 'react';
import styled from 'styled-components';

/* Components */
import { Nav } from './Nav';
import { Setting } from './Setting';

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
      <Setting />
    </StyledHeader>
  );
};

export default Header;
