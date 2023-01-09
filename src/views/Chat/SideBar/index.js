import { PersonalBar } from './personal_bar';
import { Search } from './search';
import { ChatList } from './chat_list';
import { mainUser } from '@store/constants';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const StyledBox = styled(Box)({
  padding: '10px 0',
  background: '#eae8e8'
});

export function Sidebar ({ chatList, onSelect, activeRoomList }) {
  return (
    <StyledBox>
      <PersonalBar userData={mainUser}/>
      <Search/>
      <ChatList chatList={chatList} onSelect={onSelect} activeRoomList={activeRoomList}/>
    </StyledBox>
  );
}
