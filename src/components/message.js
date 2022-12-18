import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import {ListItem} from "@mui/material";

export function Message({person, secondary, name}) {
    let addClass = "";

    if (name === "Max Kulbako") {
        addClass = "own"
    }

    return (
        <div className={`message ${addClass}`}>
            <ListItem button>
                <ListItemAvatar>
                    <Avatar alt={name} src={person} />
                </ListItemAvatar>
                <ListItemText secondary={secondary} />
            </ListItem>
        </div>
    );
}