import React from 'react';
import PropTypes from 'prop-types';
import NavbarProvider, { NavbarContext } from './NavbarProvider'

const Navbar = props => {
  return (
    <NavbarProvider>
      <NavbarContext>
          {({ data }) => {
              return (
                <div>
                  Navbar-Context
                  {data}
                </div>
              )
          }}
      </NavbarContext>
    </NavbarProvider>
  );
};

Navbar.defaultProps = {

};

Navbar.propTypes = {

};

export default Navbar