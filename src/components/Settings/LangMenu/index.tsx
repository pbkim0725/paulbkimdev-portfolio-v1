import React from 'react';
import { useRouter } from 'next/router';
import { AiFillCaretDown } from 'react-icons/ai';
import { MdLanguage } from 'react-icons/md';

/* Components */
import { LazyTippy } from './LazyTippy';

/* Styling */
import {
  StyledMenu,
  StyledLanguageSelection,
  StyledLink,
  StyledWrapper,
} from './LangMenu.styled';

export const LangMenu: React.FC = (): React.ReactElement & React.ReactNode => {
  const router = useRouter();

  return (
    <LazyTippy
      render={(attrs) => (
        <StyledMenu className="box" tabIndex={-1} {...attrs}>
          {router.locales.map((locale) => {
            return (
              <StyledLanguageSelection
                key={locale}
                onClick={() =>
                  router.push(`${router.pathname}`, `${router.pathname}`, {
                    locale,
                  })
                }
              >
                {locale === 'en-US' ? 'English' : '한국어'}
              </StyledLanguageSelection>
            );
          })}
        </StyledMenu>
      )}
      interactive={true}
      // interactiveBorder={0}
      // delay={100}
    >
      <StyledWrapper>
        <StyledLink>
          <MdLanguage />
          {router.locale === 'en-US' ? 'EN' : 'KO'}
          <AiFillCaretDown />
        </StyledLink>
      </StyledWrapper>
    </LazyTippy>
  );
};
