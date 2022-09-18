import React from 'react';
import { getAuth, signOut } from 'firebase/auth';

const LogOutButton = () => {
  return <a onClick={() => signOut(getAuth())}>Sign out</a>;
};

export default LogOutButton;
