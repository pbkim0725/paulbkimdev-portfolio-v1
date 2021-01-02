import React from 'react';
import styled from 'styled-components';
import { SiGithub, SiLinkedin, SiDevDotTo, SiTwitter } from 'react-icons/si';
const StyledFooter = styled.footer`
  background-color: #f8f8f8;
  border-top: 1px solid #e7e7e7;
  text-align: center;
  padding: 20px;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 60px;
  width: 100%;
`;

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <p>I am a footer</p>
      <div>
        <a href="https://github.com/pbkim0725">
          <SiGithub />
        </a>
        |
        <a href="https://dev.to/paulbkim">
          <SiDevDotTo />
        </a>
        |
        <a href="https://www.linkedin.com/in/paul-bin-kim-7a9752202/">
          <SiLinkedin />
        </a>
        |
        <a href="https://twitter.com/PaulBKim2">
          <SiTwitter />
        </a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
