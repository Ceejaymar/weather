import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputStyled = styled.input``;

export const Input = ({ setValue, placeholder }) => {
  return (
    <InputStyled
      type='text'
      aria-label='city-zip'
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
    />
  );
};

Input.defaultProps = {
  placeholder: 'Enter city or zipcode',
};

Input.propTypes = {
  setValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};
