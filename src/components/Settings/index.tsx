import React from 'react';
import styled from 'styled-components';
import { LangMenu } from '../Settings/LangMenu';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-top: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  margin-right: ${({ theme }) => theme.margins[6]};
  /* color: ${({ theme }) => theme.colors.primary}; */
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

export const Settings: React.FC = () => {
  return (
    <StyledWrapper>
      <LangMenu />
    </StyledWrapper>
  );
};

export default Settings;
