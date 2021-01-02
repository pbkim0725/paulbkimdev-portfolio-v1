import styled from 'styled-components';

export const StyledBurger: any = styled.button`
  /* position: absolute;
  top: 1%;
  left: 2rem; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 1.5rem;
    height: 0.25rem;
    background: ${({ theme, open }: any) =>
      open ? theme.colors.white : theme.colors.primary};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }: any) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }: any) => (open ? '0' : '1')};
      transform: ${({ open }: any) =>
        open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }: any) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
