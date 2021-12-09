import React from 'react';
import { bool, func } from 'prop-types';
import { hamburger } from 'Navbar';
const Burger = ({ open, setOpen }) => {
  return (
    <hamburger open={open} onClick={() => setOpen(!open), console.log('I was triggered during render')}>
      <div />
      <div />
      <div />
    </hamburger>
  )
}
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Burger;