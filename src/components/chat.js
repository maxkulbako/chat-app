import {Sidebar} from "./sidebar";
import {ChatRoom} from "./chatRoom";

export function Chat () {
  return (
      <div className="chat_container">
          <Sidebar className="sidebar"/>
          <ChatRoom className="active_chatRoom"/>
      </div>
  );
};