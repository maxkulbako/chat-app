import {PersonalBar} from "./personal_bar";
import {Search} from "./search";
import {ChatList} from "./chat_list";
import {mainUser} from "../store"

export function Sidebar() {
    return (
        <div className="sidebar">
            <PersonalBar userData={mainUser}/>
            <Search/>
            <ChatList/>
        </div>
    );
}

