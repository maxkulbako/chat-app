import { Outlet } from 'react-router-dom';
import { Sidebar } from './SideBar';
import { selectChatList } from '@store/chat';
import { connect } from 'react-redux';
import { Box } from '@mui/material';
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

export function ChatView ({ chatList }) {
  return (
    <ChatContainer>
      <Sidebar className="sidebar" chatList={chatList}/>
      <Outlet/>
    </ChatContainer>
  );
}

const mapState = state => ({
  chatList: selectChatList(state)
});

export const Chat = connect(mapState)(ChatView);
