import React from 'react';
import PropTypes from 'prop-types';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import ChatMessage from './ChatMessage';
import LogOutButton from './LogOutButton';

import ChatRoomContainer, { TypingZoneContainer, ChatRoomHeader } from './styled/ChatRoomContainer';
import LoadingSpinner from './LoadingSpinner';

const ChatRoom = ({ firestore }) => {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limitToLast(25);
  const auth = getAuth();
  const bottomRef = React.createRef();

  const [formValue, setFormValue] = React.useState('');

  const [messages] = useCollectionData(query, { idField: 'id' });

  React.useEffect(() => {
    if (messages) {
      bottomRef.current.scrollIntoView();
    }
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    bottomRef.current.scrollIntoView();

    if (formValue.trim().length) {
      const { uid, photoURL } = auth.currentUser;

      setFormValue('');
      await messagesRef.add({
        text: formValue,
        createdAt: serverTimestamp(),
        uid,
        photoURL
      });
    } else {
      setFormValue('');
    }
  };

  return (
    <ChatRoomContainer>
      <ChatRoomHeader>
        <h1>Chat App</h1>
        <LogOutButton />
      </ChatRoomHeader>
      {messages ? (
        messages.map((msg) => <ChatMessage key={msg.key} message={msg} auth={auth} />)
      ) : (
        <LoadingSpinner />
      )}
      <div ref={bottomRef} />
      <TypingZoneContainer onSubmit={sendMessage}>
        <input value={formValue} maxLength={500} onChange={(e) => setFormValue(e.target.value)} />
        <button type="submit">Send</button>
      </TypingZoneContainer>
    </ChatRoomContainer>
  );
};

ChatRoom.propTypes = {
  firestore: PropTypes.any,
  auth: PropTypes.any
};

export default ChatRoom;
