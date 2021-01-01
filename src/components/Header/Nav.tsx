import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useMedia } from '../../hooks/useMedia';
import Burger from './Burger';
import Menu from './Menu';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 2rem;
  height: 100%;
`;

const StyledUl = styled.ul`
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

export const Nav: React.FC = () => {
  const size = useMedia();

  const renderedList = (): JSX.Element => {
    return (
      <StyledUl>
        <li>
          <Link href="/">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/works">
            <a>Works</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </StyledUl>
    );
  };

  return (
    <StyledNav>
      <Menu />
      {/* {size === 'desktop' || size === 'tabletL' ? renderedList() : <Burger />} */}
    </StyledNav>
  );
};

export default Nav;
