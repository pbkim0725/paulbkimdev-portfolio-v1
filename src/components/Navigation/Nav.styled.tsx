import styled, { css } from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 2rem;
  height: 100%;
`;

export const StyledUl = styled.ul`
  ${({ theme }) => {
    return css`
      display: flex;
      height: inherit;
      align-items: center;
      margin-left: ${theme.margins[5]};
      font-size: ${theme.fonts.size[1]};

      li {
        padding: 16px 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: ease 0.2s;
        height: inherit;
      }

      a {
        color: ${theme.colors.black};
        font-weight: ${theme.fonts.weight.bold};
      }

      a:hover {
        border-bottom: solid 5px ${theme.colors.primaryLight};
        color: ${theme.colors.primaryDark};
      }
    `;
  }}
`;
