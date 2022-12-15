import {styled} from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import CreateIcon from '@mui/icons-material/Create';
import IconButton from '@mui/material/IconButton';

const StyledBadge = styled(Badge)(({theme}) => ({
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
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

function BadgeAvatars() {
    return (

        <StyledBadge
            overlap="circular"
            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
            variant="dot"
        >
            <Avatar alt="Max Kulbako"
                    src="https://scontent-ber1-1.xx.fbcdn.net/v/t1.6435-9/37639516_1836232409764891_2112603969481080832_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Nta0aOq9giEAX9XbOrv&_nc_ht=scontent-ber1-1.xx&oh=00_AfCkkdQIUFQXrhSqc_g1KupNbfU5GzErqYv6Ro7_YKaTCQ&oe=63C2D293"
                    sx={{width: 56, height: 56}}
            />
        </StyledBadge>

    );
}

export function PersonalBar() {
    return (
        <div className="navbar">
            <BadgeAvatars/>
            <p className="navbarName">Max Kulbako</p>
            <p className="appointment">front-end developer</p>
            <IconButton className="changeBtn">
                <CreateIcon fontSize="small"/>
            </IconButton>
        </div>
    );
}