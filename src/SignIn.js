import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import firebase from 'firebase/compat/app';

const SignInButton = styled.button`
  padding: 20px 50px;
  font-size: 21px;
  border-radius: 3em;
  border: none;
  box-shadow: 3px 3px 3px black;
  transition: 0.3s all;

  &:hover {
    box-shadow: 0 0 0 black;
  }

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

const SignIn = ({ auth }) => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return <SignInButton onClick={signInWithGoogle}>Sign in with Google</SignInButton>;
};

SignIn.propTypes = {
  auth: PropTypes.any
};

export default SignIn;
