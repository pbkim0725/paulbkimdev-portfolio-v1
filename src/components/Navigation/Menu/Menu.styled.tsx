/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';

export const StyledMenu: any = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primaryLight};
  height: 100vh;
  width: 21rem;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.2s ease-in-out;
  transform: ${({ open }: any) =>
    open ? 'tanslateX(0)' : 'translateX(-100%)'};
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 100%;
  }

  a {
    outline-style: none;
    font-size: 2rem;
    text-transform: uppercase;
    padding: ${({ theme }) => theme.paddings[5]};
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.colors.darkGray};
    text-decoration: none;
    transition: color 0.3s;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
