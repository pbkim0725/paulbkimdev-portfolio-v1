import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  background-color: black;
  margin-right: ${({ theme }) => theme.margins[6]};
`;

export const Settings: React.FC = () => {
  return (
    <StyledWrapper>
      <button>hello</button>
    </StyledWrapper>
  );
};

export default Settings;