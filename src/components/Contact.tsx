import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import hands from 'assets/images/hand.webp';
import ContactForm from './ContactForm';
import Map from './Map';

const Contact = () => {
  return (
    <>
      <Box
        component='div'
        sx={{
          background: `url(${hands}) no-repeat top/cover`,
          width: '100%',
          height: 500,
          filter: 'blur(3px)',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'rgba(255,255,255,0.3)',
            height: 500,
            width: '100%',
          }}
        ></Box>
      </Box>
      <Box py={10} id='contact'>
        <Container>
          <Typography variant='h2' mb={4} align='center'>
            Запрошую до контакту
          </Typography>
          <Grid container>
            <Grid item md={6}>
              <ContactForm />
            </Grid>
            <Grid item md={6}>
              <Map />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
