import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'common/button';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  color: #fff;
  line-height: 1.5rem;
  align-items: center;
`;

const IMPERIAL = 'imperial';
const METRIC = 'metric';

export const Units = ({ unit, error, onClick }) => (
  <Container>
    <Button
      variant='secondary'
      onClick={() => onClick(IMPERIAL)}
      disable={unit === IMPERIAL || !!error}
    >
      F&deg;
    </Button>
    |
    <Button
      variant='secondary'
      onClick={() => onClick(METRIC)}
      disable={unit === METRIC || !!error}
    >
      C&deg;
    </Button>
  </Container>
);

Units.propTypes = {
  unit: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  error: PropTypes.string,
};
