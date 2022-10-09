import React from 'react';
import styled from 'styled-components';
import { getAuth, signOut } from 'firebase/auth';

const StyledLogOutButton = styled.button`
  position: absolute;
  left: 15px;
  padding: 10px 15px;
  border-radius: 5em;
  border: none;
  font-weight: bold;
  box-shadow: 0 0 0 #8d99ae;
  transition: 0.2s all;
  cursor: pointer;
  :hover {
    box-shadow: 0 0 8px #8d99ae;
  }
`;

const LogOutButton = () => {
  return <StyledLogOutButton onClick={() => signOut(getAuth())}>Sign out</StyledLogOutButton>;
};

export default LogOutButton;
