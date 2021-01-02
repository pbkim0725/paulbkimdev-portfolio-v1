import React from 'react';
import styled, { css } from 'styled-components';
import { SiGithub, SiLinkedin, SiDevDotTo, SiTwitter } from 'react-icons/si';

const StyledFooter = styled.footer`
  background-color: #f8f8f8;
  border-top: 1px solid #e7e7e7;
  text-align: center;
  padding: 1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 50px;
  width: 100%;
  p {
  }
`;

const SocialWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
    display: flex;
    justify-content: center;
    align-items: center;

    * {
      margin: 0 0.25rem;
    }

    p {
      display: inline;
      color: ${({ theme }) => theme.colors.darkGray};
      font-size: 0.75rem;
      font-weight: ${({ theme }) => theme.fonts.weight.bold};
      letter-spacing: 1px;
      padding-left: 0.5rem;
    }

    p:hover {
      border-bottom: 1px solid;
    }

    a {
      color: ${theme.colors.gray};
      cursor: pointer;
    }

    a:hover {
      color: ${theme.colors.lightGray};
    }
  `}
`;

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <SocialWrapper>
        <a href="https://github.com/pbkim0725">
          <SiGithub />
        </a>

        <a href="https://dev.to/paulbkim">
          <SiDevDotTo />
        </a>

        <a href="https://www.linkedin.com/in/paul-bin-kim-7a9752202/">
          <SiLinkedin />
        </a>

        <a href="https://twitter.com/PaulBKim2">
          <SiTwitter />
        </a>
        <p>Built by Paul B. Kim | 2021</p>
      </SocialWrapper>
    </StyledFooter>
  );
};

export default Footer;
