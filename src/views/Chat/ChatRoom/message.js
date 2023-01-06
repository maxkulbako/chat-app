import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import { ListItem } from '@mui/material';
import { mainUser } from '@store/constants';

export function Message ({ person, secondary, name }) {
  function isOwnMessage (data) {
    if (data === mainUser.name) {
      return true;
    }
    return false;
  }

  return (
    <div className={`message ${isOwnMessage(name) ? 'own' : ''}`}>
      <ListItem button>
        <ListItemAvatar>
          <Avatar alt={name} src={person} />
        </ListItemAvatar>
        <ListItemText secondary={secondary} />
      </ListItem>
    </div>
  );
}
