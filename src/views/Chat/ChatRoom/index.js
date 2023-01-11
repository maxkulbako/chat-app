import { selectChatList } from '@store/chat';
import { useParams } from 'react-router-dom';
import { Message } from './message';
import { Input } from './input';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import * as React from 'react';
import { connect } from 'react-redux';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
  }
}));

function ChatHeader ({ name, avatar }) {
  return (
    <div className={'chat_header'}>
      <div className={'activeChatUser_info'}>
        <Avatar alt={name}
          src={avatar}
          sx={{ width: 46, height: 46 }}
        />
        <span> {name}</span>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
        </StyledBadge>
      </div>
      <div className={'activeChat_buttons'}>
        <IconButton size="large" aria-label="search" color="inherit">
          <SearchIcon />
        </IconButton>
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite color={'warning'} />} />
      </div>
    </div>
  );
}

export function ChatRoomView ({ chatList }) {
  const { roomId } = useParams();
  const activeRoom = chatList.find(item => item.id === roomId);
  const name = activeRoom.name;
  const avatar = activeRoom.avatar;

  return (
    <div className="chat">
      <ChatHeader name={name} avatar={avatar}/>
      <Divider/>
      <Paper className={'chat_table'}>
        <List sx={{ mb: 2 }}>
          {activeRoom.messages.map(({ id, secondary, person, name }) => (
            <React.Fragment key={id}>
              {id === 1 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                                    Yesterday
                </ListSubheader>
              )}

              {id === 3 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                                    Today
                </ListSubheader>
              )}

              <Message secondary={secondary} person={person} name={name}/>
            </React.Fragment>
          ))}
        </List>
      </Paper>
      <Divider sx={{ marginBottom: '10px' }}/>
      <Input/>
    </div>
  );
}

const mapState = state => ({
  chatList: selectChatList(state)
});

export const ChatRoom = connect(mapState)(ChatRoomView);
