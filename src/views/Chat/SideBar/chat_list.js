import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link, useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyleLink = styled(Link)({
  textDecoration: 'none'
});

export function ChatList ({ chatList }) {
  const { roomId } = useParams();
  const list = chatList.map((item) => (
    <div key={item.id}>
      <StyleLink to={`/${item.id}`}>
        <ChatListButton
          name={item.name}
          avatar={item.avatar}
          lastMessage={item.lastMessage}
          date={item.date}
          isSelected = {roomId === item.id}
        />
      </StyleLink>
      <Divider/>
    </div>
  ));

  return (
    <Box className="chat_list" >
      <List sx={{ width: '100%' }}>{list}</List>
    </Box>
  );
}

function ChatListButton ({ name, avatar, lastMessage, date, isSelected }) {
  return (
    <ListItemButton selected={isSelected} alignItems="flex-start" >
      <ListItemAvatar className={'avatar'} >
        <Avatar alt={name} src={avatar}/>
      </ListItemAvatar>
      <ListItemText
        className={'name_message'}
        primary={
          <Typography
            color="rgb(24, 87, 203)"
          >
            {name}
          </Typography>
        }
        secondary={
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.secondary"
          >
            {lastMessage}
          </Typography>
        }
      />
      <div className="date">{date}</div>
    </ListItemButton>
  );
}
