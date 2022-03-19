import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('facebook');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Facebook"
        value="facebook"
        icon={<FacebookIcon />}
      />
      <BottomNavigationAction
        label="BeoBevis"
        value="beobevis"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Twitter"
        value="twitter"
        icon={<TwitterIcon />}
      />
      <BottomNavigationAction label="Instagram" value="instagram" icon={<InstagramIcon />} />
    </BottomNavigation>
  );
}