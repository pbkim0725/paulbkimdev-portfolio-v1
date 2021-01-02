import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-top: 0.25rem;
  padding: 0.25rem 0.75rem;
  border-radius: 8px;
  margin-right: ${({ theme }) => theme.margins[6]};
  /* color: ${({ theme }) => theme.colors.primary}; */
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  cursor: pointer;
  text-align: center;
  box-shadow: ${({ theme }) => theme.boxShadow.md};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

export const StyledMenu = styled.menu`
  ${({ theme }) => css`
    width: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: ${theme.fonts.lh.distinct};
    box-shadow: ${theme.boxShadow.md};
    background-color: ${theme.colors.extraLightGray};
    padding: 2rem;
    border-radius: 6px;
    cursor: default;
  `}
`;

export const StyledLanguageSelection = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    &:hover {
      cursor: pointer;
      border-bottom: 3px solid blue;
    }
    /* padding-bottom: 3px; */
  `}
`;

export const StyledLink = styled.a`
  svg {
    padding-top: 0.25rem;
  }
`;
