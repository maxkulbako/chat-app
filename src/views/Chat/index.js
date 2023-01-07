import { Sidebar } from './SideBar';
import { ChatRoom } from './ChatRoom';
import { selectChatList, selectChatRoomActiveRoom, setActiveRoom, selectActiveChatList } from '@store/chat';
import { connect } from 'react-redux';
import { Box, Typography } from '@mui/material';

export function ChatView ({ chatList, selectChatRoom, activeRoom, activeRoomList }) {
  return (
    <div className="chat_container">
      <Sidebar className="sidebar" chatList={chatList} onSelect={selectChatRoom} activeRoomList={activeRoomList}/>
      {activeRoom
        ? <ChatRoom className="active_chatRoom" activeRoom={activeRoom}/>
        : <Box sx={{ justifySelf: 'center', alignSelf: 'center' }}>
          <Typography>
              Choose who you would like to write to...
          </Typography>
        </Box>
      }
    </div>
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
