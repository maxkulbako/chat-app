import CreateIcon from '@mui/icons-material/Create';
import { IconButton, Grid, Box, Typography } from '@mui/material';
import { BadgeAvatars } from './components';

export function PersonalBar ({ mainUser }) {
  return (
    <Box sx={{ padding: '0 10px' }}>
      <Grid container spacing={2}>
        <Grid item>
          <BadgeAvatars mainUser={mainUser}/>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction='column'>
            <Typography gutterBottom
              variant="subtitle1"
              component="div"
              color='primary'
            >
              {mainUser.name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              {mainUser.appointment}
            </Typography>
          </Grid>
          <Grid>
            <IconButton >
              <CreateIcon fontSize="small"/>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
