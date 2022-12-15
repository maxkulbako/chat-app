import {PersonalBar} from "./personal_bar";
import {Search} from "./search";
import {ChatList} from "./chat_list";

export function Sidebar() {
    return (
        <div className="sidebar">
            <PersonalBar/>
            <Search/>
            <ChatList/>
        </div>
    );
}

