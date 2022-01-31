import React from 'react';
import { ReactComponent as LogoW } from 'assets/images/logoWhite.svg';
import { ReactComponent as Map } from 'assets/images/mapwhite.svg';
import { ReactComponent as Post } from 'assets/images/email.svg';
import { ReactComponent as Phone } from 'assets/images/tele.svg';
import { ReactComponent as Telegram } from 'assets/images/telegram.svg';
import { ReactComponent as Fb } from 'assets/images/fb.svg';
import { ReactComponent as Ig } from 'assets/images/ig.svg';
import { ReactComponent as Vb } from 'assets/images/vb.svg';
import { Box, Typography, Container, Grid, Link } from '@mui/material';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  return (
    <Box
      sx={{ background: '#512c0c', mb: 0, pt: '70px', pb: '20px' }}
      id='footer'
    >
      <Container>
        <Grid container>
          <Grid item md={3}>
            <LogoW
              onClick={() => scroll.scrollToTop()}
              style={{ cursor: 'pointer' }}
            />
          </Grid>
          <Grid item md={4}>
            <Typography sx={{ color: '#fff' }} variant='h5'>
              Контактна інформація:
            </Typography>
            <Box sx={{ display: 'flex', mt: 3 }}>
              <Map />
              <Typography variant='subtitle1' sx={{ color: '#fff', ml: 1 }}>
                м. Миколаїв, вул. БЦ "Респект" офіс 56
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', mt: 2 }}>
              <Post />
              <Link
                href='mailto:svetluwka@gmail.com'
                variant='subtitle1'
                sx={{ color: '#fff', ml: 1 }}
              >
                svetluwka@gmail.com
              </Link>
            </Box>
            <Box sx={{ display: 'flex', mt: 2 }}>
              <Phone />
              <Link
                href='tel:+380680921138'
                variant='subtitle1'
                sx={{ color: '#fff', ml: 1 }}
              >
                +38 068 092 11 38
              </Link>
              <Link
                href='tel:+380633388670'
                variant='subtitle1'
                sx={{ color: '#fff', ml: 1 }}
              >
                +38 063 33 88 670
              </Link>
            </Box>
          </Grid>
          <Grid
            item
            md={5}
            display={'flex'}
            alignSelf={'center'}
            justifyContent={'space-around'}
          >
            <Link href='#'>
              <Telegram />
            </Link>
            <Link href='#'>
              <Fb />
            </Link>
            <Link href='#'>
              <Ig />
            </Link>
            <Link href='#'>
              <Vb />
            </Link>
          </Grid>
        </Grid>
        <Link sx={{ color: '#fff', mt: 3, display: 'block' }} paragraph>
          © 2021 Stolewski web-development
        </Link>
      </Container>
    </Box>
  );
};

export default Footer;
