import {Message} from "./message";
import {Input} from "./input";
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';



const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        // '&::after': {
        //     position: 'absolute',
        //     top: 0,
        //     left: 0,
        //     width: '100%',
        //     height: '100%',
        //     borderRadius: '50%',
        //     border: '1px solid currentColor',
        //     content: '""',
        // },
    },
}));


function ChatHeader() {
    return (
        <div className={"chat_header"}>
            <div className={"activeChatUser_info"}>
                <Avatar alt="Elon Mask"
                        src={"https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/245919410_105542318580455_2023978157166049344_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=W70hEVkeBOQAX8-r6Db&_nc_ht=scontent-dus1-1.xx&oh=00_AfDKrNRQYKoLGz7FWLSHToNt2yx_yFjNF5dOWl3TVvGTEA&oe=63A485D4"}
                        sx={{width: 46, height: 46}}
                />
                <span> Elon Mask</span>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                >
                </StyledBadge>
            </div>
            <div className={"activeChat_buttons"}>
                <IconButton size="large" aria-label="search" color="inherit">
                    <SearchIcon />
                </IconButton>
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite color={"warning"} />} />
            </div>
        </div>
    );
}

export function Chat() {
    return (
        <div className="chat">
            <ChatHeader/>
            <Divider/>
            <div className={"chat_table"}>
                Chat Table
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
            </div>
            <Divider sx={{marginBottom: "10px",}}/>
            <Input/>
        </div>
    );
}