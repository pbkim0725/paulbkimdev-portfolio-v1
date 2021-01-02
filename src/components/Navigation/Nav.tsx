import React from 'react';
import Link from 'next/link';

/* Import Styles */
import { StyledNav, StyledUl } from './Nav.styled';

/* Import Sub-Components */
import Burger from './Burger';
import Menu from './Drawer-Menu';

/* Import Hooks */
import { useMedia } from '../../hooks/useMedia';

export const Nav: React.FC = () => {
  const size = useMedia();

  const renderedMenuItems = (): JSX.Element => {
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
      {size === 'desktop' || size === 'tabletL' ? (
        renderedMenuItems
      ) : (
        <Burger />
      )}
    </StyledNav>
  );
};

export default Nav;
