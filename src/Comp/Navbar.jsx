import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const Navbar = () => {

  return (
    <Stack direction={'row'} position="static" width={'-webkit-fill-available'} height={{ xs: '5vh', sm: '7vh' }} sx={{ background: '#56585d', padding: '0.5em 1em', gap: '1em', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography variant='h4' sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' } }}>
        ArtGen  ✨
      </Typography>
      <Avatar sx={{ width: { xs: '25px', sm: '40px' }, height: { xs: '25px', sm: '40px' } }}>B</Avatar>
    </Stack >
  );
}
export default Navbar;