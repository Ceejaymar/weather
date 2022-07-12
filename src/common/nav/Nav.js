import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Nav = styled.nav`
  padding-inline: 20vw;
  text-align: left;
  font-weight: 700;
  font-size: 1.5rem;
  span {
    font-weight: 500;
  }
`;

export const Navbar = () => {
  return (
    <Nav>
      <p>
        Weather<span>app</span>
      </p>
    </Nav>
  );
};

Navbar.propTypes = {
  setValue: PropTypes.func,
};
