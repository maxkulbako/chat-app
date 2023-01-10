import { PersonalBar } from './personal_bar';
import { Search } from './search';
import { ChatList } from './chat_list';
import { mainUser } from '@store/constants';
// import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

// const StyledBox = styled(Box)({
//   padding: '10px 0',
//   background: '#eae8e8'
// });

export function Sidebar ({ chatList, onSelect, activeRoomList }) {
  return (
    <Grid
      container xs={12}
      spacing={2}
      direction='column'
      sx={{
        padding: '10px 0',
        background: '#eae8e8'
      }}
    >
      <Grid item xs>
        <PersonalBar userData={mainUser}/>
      </Grid>
      <Grid item xs>
        <Search/>
      </Grid>
      <Grid item xs>
        <ChatList chatList={chatList} onSelect={onSelect} activeRoomList={activeRoomList}/>
      </Grid>
    </Grid>
  );
}
