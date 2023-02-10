import { useState } from 'react';
import { PersonalBar } from './PersonalBar';
import { Search, chatListFilter } from './Search';
import { ChatList } from './ChatList';
import { Box, Grid } from '@mui/material';

export function Sidebar ({ chatList, mainUser }) {
  const [search, setSearch] = useState('');

  if (search) {
    chatList = chatList.filter((item) => chatListFilter(item, search));
  }

  return (
    <Box sx={{ padding: '10px 0', height: '100%' }}>
      <Grid
        container item xs={12}
        rowSpacing={2}
        direction='column'
      >
        <Grid item xs>
          <PersonalBar mainUser={mainUser}/>
        </Grid>
        <Grid item xs>
          <Search search={search} onSearch={setSearch}/>
        </Grid>
        <Grid item xs>
          <ChatList chatList={chatList}/>
        </Grid>
      </Grid>
    </Box>
  );
}
