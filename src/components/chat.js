import {Sidebar} from "./sidebar";
import {ChatRoom} from "./chatRoom";
import {selectChatList, selectChatRoomActiveRoom, setActiveRoom, selectActiveChatList} from "../store/chat";
import {connect} from "react-redux";

export function ChatView ({chatList, selectChatRoom, activeRoom, activeRoomList}) {
  return (
      <div className="chat_container">
          <Sidebar className="sidebar" chatList={chatList} onSelect={selectChatRoom} activeRoomList={activeRoomList}/>
          <ChatRoom className="active_chatRoom" activeRoom={activeRoom}/>
      </div>
  );
};

const mapState = state => ({
    chatList: selectChatList(state),
    activeRoom: selectChatRoomActiveRoom(state),
    activeRoomList: selectActiveChatList(state),
});

const mapDispatch = (dispatch) => ({
    selectChatRoom: (roomId) => dispatch(setActiveRoom(roomId)),
});

export const Chat = connect(mapState, mapDispatch)(ChatView)