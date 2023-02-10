import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { Link, useParams } from 'react-router-dom';
import { ChatListItem } from './components';

export function ChatList ({ chatList }) {
  const { roomId } = useParams();

  const list = chatList.map((item) => (
    <Box key={item.id}>
      <Link style={{ textDecoration: 'none' }} to={`/chat-app/${item.id}`}>
        <ChatListItem
          name={item.name}
          avatar={item.avatar}
          lastMessage= {
            item.messages && item.messages.length > 0
              ? item.messages[item.messages.length - 1].messageText
              : 'no messages'
          }
          date={item.date}
          isSelected = {roomId === item.id}
        />
      </Link>
      <Divider/>
    </Box>
  ));

  return (
    <List sx={{ height: '460px', overflow: 'auto', width: '100%' }}>
      {list}
    </List>
  );
}
