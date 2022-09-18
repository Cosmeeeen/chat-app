import React from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import ChatRoom from './ChatRoom';
import SignIn from './SignIn';

import AppContainer from './styled/AppContainer';

const firebaseApi = firebase.initializeApp({
  apiKey: 'AIzaSyDk4KcDeZz7gFUXZt0siqenazS9WHImnw4',
  authDomain: 'chat-app-20abd.firebaseapp.com',
  projectId: 'chat-app-20abd',
  storageBucket: 'chat-app-20abd.appspot.com',
  messagingSenderId: '885779956610',
  appId: '1:885779956610:web:316a5015746d2a53d6059b',
  measurementId: 'G-L64G6EE5KY'
});

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
