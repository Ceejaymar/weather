import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Nav = styled.nav`
  padding-inline: 15vw;
  display: flex;
  justify-content: space-between;
  text-align: left;
  font-weight: 700;
  font-size: 1.5rem;
  color: #fff;
  background-color: #2f3044;
  span {
    font-weight: 500;
  }
`;

const Date = styled.p`
  font-weight: 500;
  font-size: 1.4rem;
`;

export const Navbar = ({ date }) => {
  return (
    <Nav>
      <p>
        Weather<span>app</span>
      </p>
      <Date>{date}</Date>
    </Nav>
  );
};

Navbar.propTypes = {
  setValue: PropTypes.func,
  date: PropTypes.string.isRequired,
};
