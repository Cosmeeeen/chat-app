import styled from 'styled-components';

const ChatRoomContainer = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom: 50px;
  margin-top: 50px;
`;

export const TypingZoneContainer = styled.form`
  background-color: #8d99ae;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  position: fixed;
  bottom: 0;
  height: 40px;

  & input {
    flex: 1;
    height: 100%;
    border: none;
  }

  & button {
    height: 100%;
    width: 100px;
    border: none;
    border-radius: 100px 0 0 100px;
    cursor: pointer;
    transition: 0.2s all;
    text-shadow: 0px 0px 0px #8d99ae;
    &:hover {
      background-color: #ef233c;
      text-shadow: 1px 1px 1px #8d99ae;
      width: 300px;
    }
  }
`;

export const ChatRoomHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: #2b2d42;

  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    bottom: -10px;
    left: 0;
    pointer-events: none;
    background-image: linear-gradient(to top, rgba(43, 45, 66, 0), rgba(43, 45, 66, 1) 90%);
    width: 100%;
    height: 10px;
  }
`;

export default ChatRoomContainer;
