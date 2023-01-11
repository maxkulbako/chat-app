import { Box, Typography } from '@mui/material';

export function EmptyRoom () {
  return (
    <Box sx={{ alignSelf: 'center', justifySelf: 'center' }}>
      <Typography>
        Choose who would you like to write to...
      </Typography>
    </Box>
  );
}
