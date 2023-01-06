import { PersonalBar } from './personal_bar';
import { Search } from './search';
import { ChatList } from './chat_list';
import { mainUser } from '../../../store';

export function Sidebar ({ chatList, onSelect, activeRoomList }) {
  return (
    <div className="sidebar">
      <PersonalBar userData={mainUser}/>
      <Search/>
      <ChatList chatList={chatList} onSelect={onSelect} activeRoomList={activeRoomList}/>
    </div>
  );
}
