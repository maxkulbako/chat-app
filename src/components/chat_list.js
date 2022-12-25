import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {connect} from "react-redux";
import {selectChatList, setActiveChat, selectChatRoom} from '../store/chat'

function ChatListView({data, current, select}) {

    const list = data.map((item, index) => (
        <div key={index}>
            <ChatListButton
                      name={item.name}
                      avatar={item.avatar}
                      lastMessage={item.lastMessage}
                      date={item.date}
                      onClick={ () => select(item.id) }
            />
            <Divider/>
        </div>
    ));

    return (
        <div className="chat_list">
            <List sx={{ width: '100%'}}>{list}</List>
        </div>
    );
}

const mapState = state => ({
    data: selectChatList(state),
    current: selectChatRoom(state),
});

const mapDispatch = (dispatch) => ({
    select: chatId => dispatch(setActiveChat(chatId)),
});

export const ChatList = connect(mapState, mapDispatch)(ChatListView)

function ChatListButton({name, avatar, lastMessage, date, onClick, setActive}) {

    return (
        <ListItemButton alignItems="flex-start" onClick={onClick} >
            <ListItemAvatar className={"avatar"} >
                <Avatar alt={name} src={avatar}/>
            </ListItemAvatar>
            <ListItemText
                className={"name_message"}
                primary={
                    <Typography
                        color="rgb(24, 87, 203)"
                    >
                        {name}
                    </Typography>
                }
                secondary={
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.secondary"
                    >
                        {lastMessage}
                    </Typography>
                }
            />
            <div className="date">{date}</div>
        </ListItemButton>
    );
}