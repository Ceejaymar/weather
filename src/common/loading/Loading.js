import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  padding: 30px;
`;

const UpMotion = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    background-color: #C8B6E2;
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0)
  }
`;

const Circle = styled.span`
  display: inline-block;
  height: 20px;
  width: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin: 0 5px;
  animation: ${UpMotion} 1s infinite;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);

  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

export const Loading = () => (
  <Container>
    <Circle />
    <Circle />
    <Circle />
  </Container>
);
