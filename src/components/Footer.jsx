import { Box, Grid, Typography, Link, Divider } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import Whatsapp from '@mui/icons-material/WhatsApp';

function Footer() {
  return (<div className='hidden md:flex mt-12 '><Box sx={{ flexGrow: 1, color: 'gray', p: 6 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" gutterBottom>
            <span className='font-bold text-3xl text-black'>WorldofMills</span>
          </Typography>
          <Typography variant="subtitle1">
            The Best Restaurants in Your Home
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
          Enjoy fast and reliable food delivery with Alo Tony! We bring your favorite meals right to your doorstep, ensuring every order is handled with care and delivered on time. Experience the convenience of dining at home without compromising on taste.

          </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography variant="h6" gutterBottom>
            MENU
          </Typography>
          <Link to={'/'} color="inherit" variant="body2">Home</Link><br />
          
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography variant="h6" gutterBottom>
            CONTACTS
          </Typography>
          <Typography variant="body2" gutterBottom>
            Zahle, Bekaa, Lebanon
          </Typography>
          <Typography variant="body2" gutterBottom>
            tonyeid1994@icloud.com
          </Typography>
          <Typography variant="body2" gutterBottom>
            +961 70 427 505
          </Typography>
          <Box>
            <Link href="https://www.instagram.com/t0ny.eid/" color="inherit" sx={{ ml: 2 }}><InstagramIcon /></Link>
            <Link href="https://api.whatsapp.com/send/?phone=96170427505&text&type=phone_number&app_absent=0" color="inherit" sx={{ ml: 2 }}><Whatsapp /></Link>
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ my: 3, bgcolor: 'grey.800' }} />
      <Typography variant="caption" display="block" align="center">
        © {new Date().getFullYear()} WorldofMills. All rights reserved.
      </Typography>
      
    </Box></div>
    
  );
}

export default Footer;