import {chatListUsers} from "../store/index"
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export function ChatList({data = chatListUsers}) {
    const list = data.map((item, index) => (
        <div key={index}>
            <ChatUser
                      name={item.name}
                      avatar={item.avatar}
                      lastMessage={item.lastMessage}
                      date={item.date}
                      className="chat_user"
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

function ChatUser({name, avatar, lastMessage, date}) {

    const handleListItemClick = (event) => {
        console.log("click");
    };

    return (
        <ListItemButton alignItems="flex-start" onClick={handleListItemClick}>
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