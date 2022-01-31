import React, { useState } from 'react';
import { TextField, Box, Button } from '@mui/material';
import postForm from 'services/postForm';

const ContactForm = () => {
  const [name, setName] = useState<string>('');
  const [mail, setMail] = useState<string>('');
  const [tel, setTel] = useState<string>('');
  const [msg, setMsg] = useState<string>('');

  const formHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userRequest = { name, mail, tel, msg };
    setName('');
    setMail('');
    setTel('');
    setMsg('');
    postForm(userRequest);
  };

  return (
    <Box component='form' noValidate autoComplete='off' onSubmit={formHandler}>
      <TextField
        id='outlined-basic'
        label='Имʼя'
        variant='outlined'
        value={name}
        onChange={e => setName(e.target.value)}
        sx={{ maxWidth: 450, width: '100%', height: 55, mb: 2 }}
      />
      <TextField
        id='outlined-basic'
        label='Ваш e-mail'
        variant='outlined'
        value={mail}
        onChange={e => setMail(e.target.value)}
        sx={{ maxWidth: 450, width: '100%', height: 55, mb: 2 }}
      />
      <TextField
        id='outlined-basic'
        label='Номер телефона'
        variant='outlined'
        value={tel}
        onChange={e => setTel(e.target.value)}
        sx={{ maxWidth: 450, width: '100%', height: 55, mb: 2 }}
      />
      <TextField
        id='filled-multiline-flexible'
        label='Ваше запитання'
        multiline
        rows={4}
        value={msg}
        onChange={e => setMsg(e.target.value)}
        sx={{ maxWidth: 450, width: '100%', mb: 2 }}
        variant='outlined'
      />
      <Button
        sx={{ width: 235, py: '17px', display: 'block' }}
        variant='outlined'
        type='submit'
      >
        Надіслати
      </Button>
    </Box>
  );
};

export default ContactForm;
