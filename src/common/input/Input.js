import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputStyled = styled.input`
  font-size: 1rem;
  background-color: transparent;
  outline: transparent;
  border: 1px solid #fff;
  padding: 5px 15px;
  border-radius: 20px;
  color: #fff;

  &::placeholder {
    color: #fff;
  }
`;

export const Input = ({ setValue, placeholder }) => {
  return (
    <InputStyled
      type='text'
      aria-label='city'
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
    />
  );
};

Input.defaultProps = {
  placeholder: 'Enter city',
};

Input.propTypes = {
  setValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};
