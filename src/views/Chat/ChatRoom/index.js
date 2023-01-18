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
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import { Grid, Box, Typography } from '@mui/material';
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
    <Box>
      <Grid item container alignItems='center' justifyContent='space-between' sx={{ padding: '10px 10px 10px 0' }}>
        <Grid container direction='row' sx={{ width: 'fit-content', columnGap: '15px' }} >
          <Grid>
            <Avatar
              alt={name}
              src={avatar}
              sx={{ width: 46, height: 46 }}
            />
          </Grid>
          <Grid>
            <Typography> {name}</Typography>
          </Grid>
          <Grid>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
            </StyledBadge>
          </Grid>
        </Grid>
        <Grid>
          <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite color={'warning'} />} />
        </Grid>
      </Grid>
    </Box>
  );
}

export function ChatRoomView ({ chatList }) {
  const { roomId } = useParams();
  const activeRoom = chatList.find(item => item.id === roomId);
  const name = activeRoom.name;
  const avatar = activeRoom.avatar;

  return (
    <Grid container direction='column' justifyContent='space-between' sx={{ height: '100%', flexWrap: 'noWrap' }} item xs>
      <Grid>
        <ChatHeader name={name} avatar={avatar}/>
        <Divider/>
      </Grid>
      <Grid sx={{ overflow: 'auto' }}>
        <List sx={{ mb: 3 }}>
          {activeRoom.messages.map(({ id, secondary, name }) => (
            <React.Fragment key={id}>
              {id === '1' && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Yesterday
                </ListSubheader>
              )}

              {id === '3' && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Today
                </ListSubheader>
              )}

              <Message secondary={secondary} avatar={avatar} name={name}/>
            </React.Fragment>
          ))}
        </List>
      </Grid>
      <Grid>
        <Divider/>
        <Input/>
      </Grid>
    </Grid>
  );
}

const mapState = state => ({
  chatList: selectChatList(state)
});

export const ChatRoom = connect(mapState)(ChatRoomView);
