import React from 'react';
import tr1 from 'assets/images/tr1.webp';
import tr2 from 'assets/images/tr2.webp';
import tr3 from 'assets/images/tr3.webp';
import tr4 from 'assets/images/tr4.webp';
import tr5 from 'assets/images/tr5.webp';
import {
  Container,
  CardActionArea,
  Typography,
  CardMedia,
  Card,
  CardContent,
  Paper,
  Grid,
} from '@mui/material';

const Triggers = () => {
  return (
    <Paper id='triggers' sx={{ background: '#f0f0f0', py: '70px' }}>
      <Container fixed>
        <Typography variant='h2' mb={3} align='center'>
          Послуги
        </Typography>
        <Grid container justifyContent={'space-around'}>
          <Grid item md={4}>
            <Card sx={{ maxWidth: 345, mb: 5 }}>
              <CardActionArea sx={{ height: 500, py: '50px', px: '30px' }}>
                <CardMedia
                  component='img'
                  height='60'
                  image={tr1}
                  alt='trig'
                  sx={{ objectFit: 'contain' }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                    my='35px'
                  >
                    Правова допомога та консультації
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Вирішення деяких життєвих питань потребує спеціальних
                    компетенцій, навиків та досвіду. Я надаю правову інформацію,
                    консультації і роз'яснення з правових питань.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card sx={{ maxWidth: 345, mb: 5 }}>
              <CardActionArea sx={{ height: 500, py: '50px', px: '30px' }}>
                <CardMedia
                  component='img'
                  height='60'
                  image={tr2}
                  alt='trig'
                  sx={{ objectFit: 'contain' }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                    my='35px'
                  >
                    Виконавче провадження
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Зрозуміти та організувати контроль за процесом примусового
                    виконання рішень - це можливо. З'ясувати правомірність
                    накладення арештів майна та рахунків, обмеження у праві
                    виїзду за кордон, нарахування заборгованості зі сплати
                    аліментів, виключення з Реєстру боржників - це можливо.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card sx={{ maxWidth: 345, mb: 5 }}>
              <CardActionArea sx={{ height: 500, py: '50px', px: '30px' }}>
                <CardMedia
                  component='img'
                  height='60'
                  image={tr3}
                  alt='trig'
                  sx={{ objectFit: 'contain' }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                    my='35px'
                  >
                    Адвокатський запит
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Передбачає отримання необхідної Клієнту інформації, копій
                    документів у стислі строки. Дієвий засіб для взаємодії з
                    органами державної влади та комунальними підприємствами.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card sx={{ maxWidth: 345, mb: 5 }}>
              <CardActionArea sx={{ height: 500, py: '50px', px: '30px' }}>
                <CardMedia
                  component='img'
                  height='60'
                  image={tr4}
                  alt='trig'
                  sx={{ objectFit: 'contain' }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                    my='35px'
                  >
                    Виконавчий напис нотаріуса
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Умовою вчинення нотаріусом напису є безспірність
                    заборгованості або іншої відповідальності боржника перед
                    стягувачем. Якщо у вас є сумніви щодо правомірності вчинення
                    напису, я допоможу у цьому розібратись.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card sx={{ maxWidth: 345, mb: 5 }}>
              <CardActionArea sx={{ height: 500, py: '50px', px: '30px' }}>
                <CardMedia
                  component='img'
                  height='60'
                  image={tr5}
                  alt='trig'
                  sx={{ objectFit: 'contain' }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                    my='35px'
                  >
                    Судовий процес
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Якщо на вашу думку ваші права, свободи чи законні інтереси
                    порушені, невизнані або оспорювані, я надам вам професійну
                    правничу допомогу як у врегулюванні спору, так і під час
                    виконання рішення суду.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Triggers;
