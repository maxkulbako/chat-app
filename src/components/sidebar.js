import {Navbar} from "./navbar";
import {Search} from "./search";
import {ChatList} from "./chat_list";

export function Sidebar() {
    return (
        <div className="sidebar">
            <Navbar/>
            <Search/>
            <ChatList/>
        </div>
    );
}