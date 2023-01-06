import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import CreateIcon from '@mui/icons-material/Create';
import IconButton from '@mui/material/IconButton';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""'
    }
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0
    }
  }
}));

function BadgeAvatars ({ userData }) {
  const name = userData.name;
  const avatar = userData.avatar;

  return (

    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant="dot"
    >
      <Avatar alt={name}
        src={avatar}
        sx={{ width: 56, height: 56 }}
      />
    </StyledBadge>

  );
}

export function PersonalBar ({ userData }) {
  return (
    <div className="personal_bar">
      <BadgeAvatars userData={userData}/>
      <p className="personal_bar_name">{userData.name}</p>
      <p className="appointment">{userData.appointment}</p>
      <IconButton className="changeBtn">
        <CreateIcon fontSize="small"/>
      </IconButton>
    </div>
  );
}
