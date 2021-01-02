import styled, { css } from 'styled-components';

export const StyledMenu = styled.menu`
  ${({ theme }) => css`
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
