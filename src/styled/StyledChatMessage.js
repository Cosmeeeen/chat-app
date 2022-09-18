import styled from 'styled-components';

const StyledChatMessage = styled.div`
  display: flex;
  justify-content: ${({ isByUser }) => (isByUser ? 'right' : 'left')};
  align-items: flex-end;
  flex-direction: ${({ isByUser }) => (isByUser ? 'row-reverse' : 'row')};
  margin: 5px;

  & img {
    width: 50px;
    height: 50px;
    border-radius: 15px;
    border: 2px solid #edf2f4;
  }

  & p {
    background-color: ${({ isByUser }) => (isByUser ? '#d90429' : '#8d99ae')};
    padding: 10px;
    margin: 5px;
    margin-bottom: 10px;
    max-width: 80%;
    ${({ isByUser }) =>
      isByUser ? 'border-radius: 15px 15px 0px 15px;' : 'border-radius: 15px 15px 15px 0px;'}
  }
`;

export default StyledChatMessage;
