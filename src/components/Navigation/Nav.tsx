import React, { useRef, useState } from 'react';
import Link from 'next/link';
/* Import Styles */
import { StyledNav, StyledUl } from './Nav.styled';
/* Import Sub-Components */
import Burger from './Burger';
import Menu from './Menu';
/* Import Hooks */
import { useMedia } from '../../hooks/useMedia';
import { useDisclosure } from '../../hooks/useDisclosure';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { useRouter } from 'next/router';

export const Nav: React.FC = () => {
  const { isOpen, setOpen } = useDisclosure(false);
  const [hover, setHover] = useState<boolean | string>(false);
  const router = useRouter();
  const node = useRef();
  const size = useMedia();

  useOnClickOutside(node, () => setOpen(false));

  const renderedMenuItems = (): JSX.Element => {
    return (
      <StyledUl>
        <li>
          <Link href="/about">
            <a
              onMouseEnter={() => setHover('about')}
              onMouseLeave={() => setHover(false)}
            >
              {router.locale === 'ko' && hover === 'about' ? '소개' : 'About'}
            </a>
          </Link>
        </li>
        <li>
          <Link href="/works">
            <a
              onMouseEnter={() => setHover('works')}
              onMouseLeave={() => setHover(false)}
            >
              {router.locale === 'ko' && hover === 'works'
                ? '포트폴리오'
                : 'Works'}
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a
              onMouseEnter={() => setHover('blog')}
              onMouseLeave={() => setHover(false)}
            >
              {router.locale === 'ko' && hover === 'blog' ? '블로그' : 'Blog'}
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a
              onMouseEnter={() => setHover('contact')}
              onMouseLeave={() => setHover(false)}
            >
              {router.locale === 'ko' && hover === 'contact'
                ? '문의'
                : 'Contact'}
            </a>
          </Link>
        </li>
      </StyledUl>
    );
  };

  return (
    <StyledNav ref={node}>
      {size === 'desktop' ? (
        renderedMenuItems()
      ) : (
        <Burger open={isOpen} setOpen={setOpen} />
      )}
      <Menu open={isOpen} setOpen={setOpen} />
    </StyledNav>
  );
};

export default Nav;
