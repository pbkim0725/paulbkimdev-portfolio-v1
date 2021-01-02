import React, { useState } from 'react';
import Link from 'next/link';
import { StyledMenu } from './Menu.styled';
import { disclosurePropTypes } from '../types';
import { useRouter } from 'next/router';

const Menu: React.FC<disclosurePropTypes> = ({ open }) => {
  const [hover, setHover] = useState<boolean | string>(false);
  const router = useRouter();

  return (
    <StyledMenu open={open}>
      <Link href="/about">
        <a
          onMouseEnter={() => setHover('about')}
          onMouseLeave={() => setHover(false)}
        >
          {router.locale === 'ko' && hover === 'about' ? '소개' : 'About'}
        </a>
      </Link>
      <Link href="/works">
        <a
          onMouseEnter={() => setHover('works')}
          onMouseLeave={() => setHover(false)}
        >
          {router.locale === 'ko' && hover === 'works' ? '포트폴리오' : 'Works'}
        </a>
      </Link>
      <Link href="/blog">
        <a
          onMouseEnter={() => setHover('blog')}
          onMouseLeave={() => setHover(false)}
        >
          {router.locale === 'ko' && hover === 'blog' ? '블로그' : 'Blog'}
        </a>
      </Link>
      <Link href="/contact">
        <a
          onMouseEnter={() => setHover('contact')}
          onMouseLeave={() => setHover(false)}
        >
          {router.locale === 'ko' && hover === 'contact' ? '문의' : 'Contact'}
        </a>
      </Link>
    </StyledMenu>
  );
};

export default Menu;
