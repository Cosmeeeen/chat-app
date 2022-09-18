import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/compat/app';

const SignIn = ({ auth }) => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
};

SignIn.propTypes = {
  auth: PropTypes.any
};

export default SignIn;
