import {Message} from "./message";
import {Input} from "./input";

export function Chat() {
    return (
        <div className="chat">Chat
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Input/>
        </div>
    );
}