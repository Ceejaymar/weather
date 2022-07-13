import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color: ${({ variant }) =>
    variant === 'secondary' ? 'transparent' : '#ec6e4c'};
  border: none;
  color: ${({ disabled }) =>
    disabled ? 'color: rgba(255, 255, 255, 0.6)' : '#fff'};
  font-size: 1.5rem;
  cursor: pointer;
  letter-spacing: 2px;

  &:hover {
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const Button = ({ children, variant, disabled, onClick, ...props }) => (
  <ButtonStyled
    onClick={onClick}
    variant={variant}
    disabled={disabled}
    {...props}
  >
    {children}
  </ButtonStyled>
);

Button.defaultProps = {
  onClick: () => null,
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.string,
  disabled: PropTypes.Boolean,
  onClick: PropTypes.func,
};
