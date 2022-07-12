import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Input } from 'common/input/Input.stories';

const setup = () => {
  const utils = render(<Input />);
  const input = utils.getByLabelText('city-zip');
  return {
    input,
    ...utils,
  };
};

test('It should allow numbers', () => {
  const { input } = setup();
  expect(input.value).toBe('');
  fireEvent.change(input, { target: { value: '11206' } });
  expect(input.value).toBe('11206');
});
