import { selectChatList, selectMainUser } from '@store/chat';
import { Message } from './Message';
import { Input } from './Input';
import { Divider, List, Grid, Box } from '@mui/material';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState, useRef } from 'react';
import { actionSendMessage, actionDeleteMessage, actionDeleteAllMessages } from '@store/chat/actions';
import { BasicSpeedDial, ChatHeader } from './components';

export function ChatRoomView ({
  chatList,
  mainUser,
  sendMessage,
  deleteMessage,
  deleteAllMessages
}) {
  const { roomId } = useParams();
  const activeRoom = chatList.find(item => item.id === roomId);
  const name = activeRoom.name;
  const avatar = activeRoom.avatar;
  const [textToSearch, setTextToSeach] = useState('');
  const ref = useRef();

  return (
    <Grid container
      direction='column'
      justifyContent='space-between'
      sx={{ height: '100%', flexWrap: 'noWrap' }}
      item xs
    >
      <Grid>
        <ChatHeader
          name={name}
          avatar={avatar}
          textToSearch={textToSearch}
          onSearch={setTextToSeach} />
        <Divider/>
      </Grid>
      <Grid sx={{ overflow: 'auto' }}>
        <List sx={{ mb: 3, overflow: 'auto', marginBottom: '0px' }}>
          {activeRoom.messages.map(({ id, messageText, name }) => (
            <Message
              key={id}
              deleteMessage={deleteMessage}
              messageId={id}
              messageText={messageText}
              avatar={avatar}
              name={name}
              mainUser={mainUser}
              roomId={roomId}
              textToSearch={textToSearch}
              reference={ref}
            />
          ))}
          <Box ref={ref} marginTop='100px'>
            <BasicSpeedDial roomId={roomId} actionFn={deleteAllMessages}/>
          </Box>
        </List>
      </Grid>
      <Grid>
        <Divider/>
        <Input roomId={roomId} sendMessage={sendMessage}/>
      </Grid>
    </Grid>
  );
}

const mapState = state => ({
  chatList: selectChatList(state),
  mainUser: selectMainUser(state)
});

const mapDispatch = (dispatch) => ({
  sendMessage: (text) => dispatch(actionSendMessage(text)),
  deleteMessage: (message) => dispatch(actionDeleteMessage(message)),
  deleteAllMessages: (messages) => dispatch(actionDeleteAllMessages(messages))
});

export const ChatRoom = connect(mapState, mapDispatch)(ChatRoomView);
