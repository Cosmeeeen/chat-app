import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

const spinAnimation = keyframes`
  0% {transform: rotate(-135deg);}
  100% {transform: rotate(225deg);}
`;

const StyledLoadingSpinner = styled.div`
  height: 100px;
  width: 100px;
  animation-name: ${spinAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;

  border-top: 20px solid white;
  border-left: 20px solid white;
  transform: rotate(-135deg);
  border-radius: 50%;
`;

const StyledLoadingText = styled.p`
  margin-top: 15px;
  font-size: 18px;
`;

const LoadingSpinner = () => {
  return (
    <LoadingSpinnerContainer>
      <StyledLoadingSpinner />
      <StyledLoadingText>Loading...</StyledLoadingText>
    </LoadingSpinnerContainer>
  );
};

export default LoadingSpinner;
