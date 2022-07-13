import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color: ${({ variant }) =>
    variant === 'secondary' ? 'transparent' : '#ec6e4c'};
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  letter-spacing: 2px;

  &:hover {
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const Button = ({ children, variant, onClick, ...props }) => (
  <ButtonStyled onClick={onClick} variant={variant} {...props}>
    {children}
  </ButtonStyled>
);

Button.defaultProps = {
  onClick: () => null,
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};
