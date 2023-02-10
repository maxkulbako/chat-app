import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { Grid, Box, Typography, FormControl, OutlinedInput } from '@mui/material';
import { useRef, useState } from 'react';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
  }
}));

export function ChatHeader ({ name, avatar, textToSearch, onSearch }) {
  const [inputVisible, setInputVisible] = useState(false);
  const inputRef = useRef(null);

  const handlerSearchButton = () => {
    setInputVisible(!inputVisible);
    setTimeout(() => inputRef.current.focus(), 0);
  };

  const handleInput = () => {
    onSearch('');
    setInputVisible(!inputVisible);
  };

  return (
    <Box>
      <Grid item container
        alignItems='center'
        justifyContent='space-between'
        sx={{ padding: '10px 10px 10px 0' }}
      >
        <Grid container direction='row' sx={{ width: 'fit-content', columnGap: '15px' }} >
          <Grid>
            <Avatar
              alt={name}
              src={avatar}
              sx={{ width: 46, height: 46 }}
            />
          </Grid>
          <Grid>
            <Typography> {name}</Typography>
          </Grid>
          <Grid>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
            </StyledBadge>
          </Grid>
        </Grid>
        <Grid sx={{ display: 'flex', alignItems: 'center' }}>
          <FormControl size='small' sx={{ width: 'fit-content', visibility: inputVisible ? 'visible' : 'hidden' }} >
            <OutlinedInput
              id="outlined-adornment-password"
              type='text'
              value={textToSearch}
              onChange={ e => onSearch(e.target.value)}
              onBlur={handleInput}
              inputProps={{ ref: inputRef }}
            />
          </FormControl>
          <IconButton size="large" aria-label="search" color="inherit" onClick={handlerSearchButton} >
            <SearchIcon />
          </IconButton>
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite color={'warning'} />} />
        </Grid>
      </Grid>
    </Box>
  );
}
