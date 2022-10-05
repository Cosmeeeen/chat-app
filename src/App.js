import React from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import ChatRoom from './ChatRoom';
import SignIn from './SignIn';

import AppContainer from './styled/AppContainer';
import firebaseConfig from './firebase-config.json';

const firebaseApi = firebase.initializeApp(firebaseConfig);

const auth = firebaseApi.auth();
const firestore = firebaseApi.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <AppContainer>
      {user ? <ChatRoom firestore={firestore} /> : <SignIn auth={auth} />}
    </AppContainer>
  );
}

export default App;
