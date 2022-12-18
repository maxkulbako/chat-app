import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


export function ChatList({data = usersData}) {
    const list = data.map((item, index) => (
        <div>
            <ChatUser key={index}
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


const usersData = [
    {
        name: "Elon Mask",
        avatar: "https://scontent-ber1-1.xx.fbcdn.net/v/t39.30808-6/245919410_105542318580455_2023978157166049344_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cgcHQ9-w5ZQAX-f-xnb&_nc_ht=scontent-ber1-1.xx&oh=00_AfCJBl3F8navsgleT-zOltyHgTlqkutsKz2XXZEFClnJ2w&oe=63A09154",
        lastMessage: "I'll be in your neighborhood...",
        date: "10/11/22",
    },
    {
        name: "Elon Mask",
        avatar: "https://scontent-ber1-1.xx.fbcdn.net/v/t39.30808-6/245919410_105542318580455_2023978157166049344_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cgcHQ9-w5ZQAX-f-xnb&_nc_ht=scontent-ber1-1.xx&oh=00_AfCJBl3F8navsgleT-zOltyHgTlqkutsKz2XXZEFClnJ2w&oe=63A09154",
        lastMessage: "I'll be in your neighborhood...",
        date: "10/11/22",
    },
    {
        name: "Elon Mask",
        avatar: "https://scontent-ber1-1.xx.fbcdn.net/v/t39.30808-6/245919410_105542318580455_2023978157166049344_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cgcHQ9-w5ZQAX-f-xnb&_nc_ht=scontent-ber1-1.xx&oh=00_AfCJBl3F8navsgleT-zOltyHgTlqkutsKz2XXZEFClnJ2w&oe=63A09154",
        lastMessage: "I'll be in your neighborhood...",
        date: "10/11/22",
    },
    {
        name: "Elon Mask",
        avatar: "https://scontent-ber1-1.xx.fbcdn.net/v/t39.30808-6/245919410_105542318580455_2023978157166049344_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cgcHQ9-w5ZQAX-f-xnb&_nc_ht=scontent-ber1-1.xx&oh=00_AfCJBl3F8navsgleT-zOltyHgTlqkutsKz2XXZEFClnJ2w&oe=63A09154",
        lastMessage: "I'll be in your neighborhood...",
        date: "10/11/22",
    },
    {
        name: "Elon Mask",
        avatar: "https://scontent-ber1-1.xx.fbcdn.net/v/t39.30808-6/245919410_105542318580455_2023978157166049344_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cgcHQ9-w5ZQAX-f-xnb&_nc_ht=scontent-ber1-1.xx&oh=00_AfCJBl3F8navsgleT-zOltyHgTlqkutsKz2XXZEFClnJ2w&oe=63A09154",
        lastMessage: "I'll be in your neighborhood...",
        date: "10/11/22",
    }

]