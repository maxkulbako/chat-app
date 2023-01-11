import { PersonalBar } from './personal_bar';
import { Search } from './search';
import { ChatList } from './chat_list';
import { mainUser } from '@store/constants';
import { Grid } from '@mui/material';

export function Sidebar ({ chatList }) {
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
        <ChatList chatList={chatList}/>
      </Grid>
    </Grid>
  );
}
