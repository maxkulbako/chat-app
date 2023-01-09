import { Sidebar } from './SideBar';
import { ChatRoom } from './ChatRoom';
import { selectChatList, selectChatRoomActiveRoom, setActiveRoom, selectActiveChatList } from '@store/chat';
import { connect } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const ChatContainer = styled(Box)({
  background: '#ffffff',
  maxWidth: '1024px',
  width: 'calc(100vw - 50px)',
  height: 'calc(100vh - 100px)',
  margin: '100px auto',
  borderRadius: '20px',
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gridTemplateRows: '1fr',
  overflow: 'hidden'
});

export function ChatView ({ chatList, selectChatRoom, activeRoom, activeRoomList }) {
  return (
    <ChatContainer>
      <Sidebar className="sidebar" chatList={chatList} onSelect={selectChatRoom} activeRoomList={activeRoomList}/>
      {activeRoom
        ? <ChatRoom className="active_chatRoom" activeRoom={activeRoom}/>
        : <Box sx={{ justifySelf: 'center', alignSelf: 'center' }}>
          <Typography>
              Choose who you would like to write to...
          </Typography>
        </Box>
      }
    </ChatContainer>
  );
}

const mapState = state => ({
  chatList: selectChatList(state),
  activeRoom: selectChatRoomActiveRoom(state),
  activeRoomList: selectActiveChatList(state)
});

const mapDispatch = (dispatch) => ({
  selectChatRoom: (roomId) => dispatch(setActiveRoom(roomId))
});

export const Chat = connect(mapState, mapDispatch)(ChatView);
