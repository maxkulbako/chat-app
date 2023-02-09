import { FormControl, OutlinedInput, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';

const filterName = (item, search) =>
  item.name.toLowerCase().includes(search.toLowerCase());

export const chatListFilter = (item, search) => filterName(item, search);

export function Search ({ search, onSearch }) {
  return (
    <Box sx={{ padding: '0 10px' }} >
      <FormControl sx={{ width: '100%' }} >
        <OutlinedInput
          placeholder='search'
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          type={'text'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="clear"
                onClick={() => onSearch('')}
                edge="end"
              >
                <HighlightOffTwoToneIcon color='primary' sx={{ display: search ? 'block' : 'none' }} size='small'/>
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}
