import React from 'react';
import { useTheme } from '@mui/material/styles';
import fem from 'assets/images/fem.webp';
import {
  Box,
  MobileStepper,
  Paper,
  Typography,
  Button,
  Container,
  Grid,
} from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const slides = [
  {
    id: 1,
    title: 'Родичів позбавлю всіх прав до заповіту!',
    text: 'Існує багато варіацій уривків з Lorem Ipsum, але більшість з них зазнала певних змін на кшталт жартівливих вставок або змішування слів, які навіть не виглядають правдоподібно. Якщо ви збираєтесь використовувати Lorem Ipsum',
  },
  {
    id: 2,
    title: 'Забезпечу все в найкращому вигляді!',
    text: 'Вже давно відомо, що читабельний зміст буде заважати зосередитись людині, яка оцінює композицію сторінки. Сенс використання Lorem Ipsum полягає в тому, що цей текст має більш-менш нормальне розподілення літер на відміну від, наприклад.',
  },
  {
    id: 3,
    title: 'Розведу зі збереженням всього майна!',
    text: 'Це робить текст схожим на оповідний. Багато програм верстування та веб-дизайну використовують Lorem Ipsum як зразок і пошук за терміном "lorem ipsum" відкриє багато веб-сайтів, які знаходяться ще в зародковому стані.',
  },
];

const Carousel = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = slides.length;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Container fixed>
      <Grid
        container
        sx={{
          py: 8,
          alignItems: 'center',
        }}
      >
        <Grid item md={5}>
          <Box
            component='img'
            src={fem}
            sx={{ maxWidth: 500, width: '100%' }}
          />
        </Grid>
        <Grid item md={7} width={'100%'}>
          <Box sx={{ maxWidth: 600, flexGrow: 1, ml: { xs: 2, md: 8 } }}>
            <Paper
              square
              elevation={0}
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: 50,
                width: '100%',
                pl: 2,
                bgcolor: 'background.default',
              }}
            ></Paper>
            <AutoPlaySwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {slides.map((step, index) => (
                <div key={step.id}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <>
                      <Typography
                        variant='h1'
                        color='primary'
                        sx={{
                          fontSize: '60px',
                          fontWeight: 600,
                          display: 'block',
                          maxWidth: 500,
                          overflow: 'hidden',
                          width: '100%',
                        }}
                      >
                        {step.title}
                      </Typography>
                      <Typography
                        color='primary'
                        sx={{
                          height: 150,
                          display: 'block',
                          maxWidth: 400,
                          overflow: 'hidden',
                          width: '100%',
                        }}
                      >
                        {step.text}
                      </Typography>
                    </>
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <Button
              variant='contained'
              color='primary'
              sx={{ display: 'block', my: '25px', py: '17px', width: '235px' }}
            >
              Дізнатись більше
            </Button>
            <MobileStepper
              sx={{ justifyContent: 'center' }}
              steps={maxSteps}
              position='static'
              activeStep={activeStep}
              nextButton={null}
              backButton={null}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Carousel;
