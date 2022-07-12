import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyled = styled.button``;

export const Button = ({ children, onClick, ...props }) => (
  <ButtonStyled onClick={onClick} {...props}>
    {children}
  </ButtonStyled>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => null,
};
