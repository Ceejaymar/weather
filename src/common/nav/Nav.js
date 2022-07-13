import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  background-color: #2f3044;

  @media (min-width: 480px) {
    flex-direction: row;
  }

  div {
    color: #ec6e4c;
    margin: 20px;
  }
  span {
    color: #fff;
    font-weight: 300;
  }
`;

const Date = styled.span`
  font-weight: 500;
  font-size: 1.4rem;
`;

export const Navbar = ({ date }) => {
  return (
    <Nav>
      <div>
        Weather<span>app</span>
      </div>
      <Date>{date}</Date>
    </Nav>
  );
};

Navbar.propTypes = {
  setValue: PropTypes.func,
  date: PropTypes.string.isRequired,
};
