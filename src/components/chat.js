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
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import * as React from "react";


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

export function Chat({messages = messagesData}) {
    return (
        <div className="chat">
            <ChatHeader/>
            <Divider/>
                <Paper className={"chat_table"}>
                    <List sx={{ mb: 2 }}>
                        {messages.map(({ id, secondary, person, name }) => (
                            <React.Fragment key={id}>
                                {id === 1 && (
                                    <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                                        Yesterday
                                    </ListSubheader>
                                )}

                                {id === 3 && (
                                    <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                                        Today
                                    </ListSubheader>
                                )}

                                <Message secondary={secondary} person={person} name={name}/>
                            </React.Fragment>
                        ))}
                    </List>
                </Paper>
            <Divider sx={{marginBottom: "10px",}}/>
            <Input/>
        </div>
    );
}

const messagesData = [
    {
        id: 1,
        primary: 'Brunch this week?',
        name: 'Max Kulbako',
        secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
        person: '/static/images/avatar/5.jpg',
    },
    {
        id: 2,
        primary: 'Birthday Gift',
        name: 'Elon Mask',
        secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
        person: '/static/images/avatar/1.jpg',
    },
    {
        id: 3,
        primary: 'Recipe to try',
        name: 'Max Kulbako',
        secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
        person: '/static/images/avatar/2.jpg',
    },
    {
        id: 4,
        primary: 'Yes!',
        name: 'Elon Mask',
        secondary: 'I have the tickets to the ReactConf for this year.',
        person: '/static/images/avatar/3.jpg',
    },
    {
        id: 5,
        primary: "Doctor's Appointment",
        name: 'Elon Mask',
        secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
        person: '/static/images/avatar/4.jpg',
    },
    {
        id: 6,
        primary: 'Discussion',
        name: 'Max Kulbako',
        secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
        person: '/static/images/avatar/5.jpg',
    },
    {
        id: 7,
        primary: 'Summer BBQ',
        name: 'Elon Mask',
        secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
        person: '/static/images/avatar/1.jpg',
    },
];