import React from 'react';
import PropTypes from 'prop-types';

import { getAuth } from 'firebase/auth';
import StyledChatMessage from './styled/StyledChatMessage';

const ChatMessage = ({ message }) => {
  const { text, uid, photoURL } = message;
  const auth = getAuth();

  return (
    <StyledChatMessage isByUser={auth.currentUser.uid === uid}>
      <img src={photoURL} />
      <p style={{ wordBreak: 'normal', overflowWrap: 'anywhere' }}>{text}</p>
    </StyledChatMessage>
  );
};

ChatMessage.propTypes = {
  message: PropTypes.any
};

export default ChatMessage;
