import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 4 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" 
        icon={<RestoreIcon />} 
        sx={{ color: 'black', display: 'flex', alignItems: 'center' }}/>
        <BottomNavigationAction label="Favorites" 
        icon={<FavoriteIcon />} 
        sx={{ color: 'black', display: 'flex', alignItems: 'center' }}/>
        <BottomNavigationAction label="Nearby" 
        icon={<LocationOnIcon />} 
        sx={{ color: 'black', display: 'flex', alignItems: 'center' }}/>

      </BottomNavigation>
        <section>
          <h1 style={{ fontSize: '12px', color: 'black', display: 'flex', alignItems: 'center' }}>2023 MUI</h1>
          
        </section>

    </Box>
  );
}