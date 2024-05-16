// Footer.js
import { Box, Grid, Typography, Link, Divider } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import WorldofMills from '../media/png/Logo.png';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="hidden md:flex mt-12">
      <Box sx={{ flexGrow: 1, color: 'gray', p: 6 }}>
        <Grid container spacing={2}>
          {/* Branding Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom>
              <div className="flex items-center">
                <img src={WorldofMills} alt="logo" className="size-14 mr-2" />
                <span className="font-bold text-3xl text-black">WorldofMills</span>
              </div>
            </Typography>
            <Typography variant="subtitle1">{t('Your Partner in Industrial Machinery Solutions')}</Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              {t('Experience excellence in machinery with WorldofMills. We design, manufacture, and deliver high-quality industrial machinery tailored to meet your specific needs. Our commitment to innovation and precision ensures that every machine we produce enhances your productivity and efficiency. Trust WorldofMills to be your reliable partner in achieving operational success and industrial growth.')}
            </Typography>
          </Grid>

          {/* Menu Section */}
          <Grid item xs={6} md={4}>
            <Typography variant="h6" style={{ fontWeight: 600 }} gutterBottom>
              {t('MENU')}
            </Typography>
            <Link href="/" color="inherit" variant="body2">
              {t('Home')}
            </Link>
            <br />
          </Grid>

          {/* Contacts Section */}
          <Grid item xs={6} md={4}>
            <Typography variant="h6" gutterBottom style={{ fontWeight: 600 }}>
              {t('CONTACTS')}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {t('Location')}
            </Typography>
            <Typography variant="body2" gutterBottom>
              worldofmills0@gmail.com
            </Typography>
            <Typography variant="body2" gutterBottom>
              +971 52 621 1664
            </Typography>
            <Box>
              <Link
                href="https://www.instagram.com/_worldofmills_/"
                color="inherit"
                sx={{ ml: 2 }}
              >
                <InstagramIcon />
              </Link>
              <Link
                href="https://api.whatsapp.com/send/?phone=971526211664&text&type=phone_number&app_absent=0"
                color="inherit"
                sx={{ ml: 2 }}
              >
                <WhatsAppIcon />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 3, bgcolor: 'grey.800' }} />
        <Typography variant="caption" display="block" align="center">
          © {new Date().getFullYear()} WorldofMills. {t('All rights reserved.')}.
        </Typography>
      </Box>
    </div>
  );
}

export default Footer;
