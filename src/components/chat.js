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
import ListSubheader from '@mui/material/ListSubheader';
import * as React from "react";
import {messagesData} from "../store"


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


function ChatHeader({name, avatar}) {
    return (
        <div className={"chat_header"}>
            <div className={"activeChatUser_info"}>
                <Avatar alt={name}
                        src={avatar}
                        sx={{width: 46, height: 46}}
                />
                <span> {name}</span>
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
    const name = messages[3].name;
    const avatar = messages[3].person;

    return (
        <div className="chat">
            <ChatHeader name={name} avatar={avatar}/>
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

