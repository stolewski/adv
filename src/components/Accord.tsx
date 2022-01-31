import React from 'react';
import {
  Accordion,
  Container,
  Typography,
  AccordionSummary,
  AccordionDetails,
  Box,
  Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Accord = () => {
  return (
    <Box py={8} id='accord'>
      <Container>
        <Typography
          variant='h2'
          mb={3}
          align='center'
          sx={{ fontSize: { xs: 36, sm: '3.75rem' } }}
        >
          Найпоширеніші питання
        </Typography>
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid item md={8}>
            <Accordion
              sx={{
                mb: 3,
                mx: 'auto',
                background: '#f0f0f0',
                p: '25px 30px',
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography sx={{ fontWeight: 600 }}>
                  Скільки коштує година праці адвоката
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Вартість консультації становить від 300,00 грн. з 50%
                  передоплатою і передбачає вивчення наданих Клієнтом вихідних
                  даних (обставин справи, документів), їх правовий аналіз,
                  визначення варіантів вирішення питання та обговорення їх з
                  Клієнтом.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                mb: 3,
                mx: 'auto',
                background: '#f0f0f0',
                p: '25px 30px',
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography sx={{ fontWeight: 600 }}>
                  Як зв'язатись з адвокатом?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Через віконце на сайті: "Замовити консультацію". Електронним
                  листом на пошту: svetluwka@gmail.com Телефонним дзвінком за
                  номерами: +38 063 33 88 670, +38 068 092 11 38 Будь-яким
                  месенджером за номером : 063 33 88 670. Листом в будь-яку
                  соцмережу, активні посилання на які є на сайті.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                mb: 3,
                mx: 'auto',
                background: '#f0f0f0',
                p: '25px 30px',
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography sx={{ fontWeight: 600 }}>
                  Як підготуватись до консультації?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  По-перше: з'ясувати для себе чи дійсно потрібен вам адвокат?
                  Можливо, вам насправді потрібна порада сусідки, подруги чи
                  мами. По-друге: чітко сформулювати для себе питання, у
                  вирішенні якого вам необхідна допомога адвоката. По-третє:
                  підготувати всі документи (або їх копії), які на вашу думку
                  стосуються вашого питання, а також документи, що підтверджують
                  вашу особу. І останнє: домовитись з адвокатом про час і формат
                  зустрічі.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Accord;
