import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import { ListItem, Box, Typography } from '@mui/material';
import { mainUser } from '@store/constants';
import { useTheme } from '@mui/material/styles';

export function Message ({ avatar, secondary, name }) {
  const theme = useTheme();
  const isMainUser = mainUser.name === name;

  return (
    <Box sx={ isMainUser ? { display: 'flex', justifyContent: 'end' } : {}}>
      <ListItem alignItems='flex-start'
        sx={{
          width: '60%',
          display: 'flex',
          flexDirection: isMainUser ? 'row-reverse' : ''
        }} button>
        <ListItemAvatar>
          <Avatar alt={name} src={avatar} sx={{ marginLeft: isMainUser ? '8px' : '' }} />
        </ListItemAvatar>
        <ListItemText secondary={
          <Typography variant='body2'
            sx={ isMainUser
              ? {
                textAlign: 'end',
                backgroundColor: theme.palette.primary.main,
                borderRadius: '10px',
                padding: '8px',
                color: '#fff'
              }
              : { padding: '8px' }
            }
          >
            {secondary}
          </Typography>
        }
        />
      </ListItem>
    </Box>
  );
}
