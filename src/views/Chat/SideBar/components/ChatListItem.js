import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import ListItem from '@mui/material/ListItem';

export function ChatListItem ({ name, avatar, lastMessage, date, isSelected }) {
  return (
    <ListItem sx={{ padding: '10px' }} selected={isSelected} >
      <ListItemAvatar>
        <Avatar alt={name} src={avatar}/>
      </ListItemAvatar>
      <ListItemText
        sx={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          width: '100px'
        }}
        primary={
          <Grid container item xs justifyContent='space-between'>
            <Grid item>
              <Typography
                color="primary"
              >
                {name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                color="text.secondary"
                display="block"
                variant="body2"
              >
                {date}
              </Typography>
            </Grid>
          </Grid>
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
    </ListItem>
  );
}
