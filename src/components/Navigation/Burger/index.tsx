import React from 'react';
import { disclosurePropTypes } from '../types';
import { StyledBurger } from './Burger.styled';

const Burger: React.FC<disclosurePropTypes> = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
