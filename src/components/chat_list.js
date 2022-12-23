//import {chatListUsers} from "../store/index"
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {connect} from "react-redux";

function ChatListView({data, current, select}) {

    const list = data.map((item, index) => (
        <div key={index}>
            <ChatUser
                      name={item.name}
                      avatar={item.avatar}
                      lastMessage={item.lastMessage}
                      date={item.date}
                      onClick={() => select(index)}
                      setActive={ index === current ? "rgba(79, 77, 77, 0.13)" : ""}
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
    data: state.chatList,
    current: state.current,
});

const mapDispatch = (dispatch) => ({
    select: function (number) {
        dispatch({
            type: "SELECT_ITEM",
            payload: number
        });
    },
});

export const ChatList = connect(mapState, mapDispatch)(ChatListView)

function ChatUser({name, avatar, lastMessage, date, onClick, setActive}) {

    // const handleListItemClick = (event) => {
    //     console.log("click");
    // };

    return (
        <ListItemButton alignItems="flex-start" onClick={onClick} sx={{background: setActive}}>
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