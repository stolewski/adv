import React from 'react';
import { Link } from 'react-scroll';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import {
  AppBar,
  Container,
  Toolbar,
  Box,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  Modal,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ContactForm from './ContactForm';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [open, setOpen] = React.useState(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <header>
      <AppBar position='static' color='transparent'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Box
              component='div'
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
            >
              <Link to='footer' duration={800} smooth={true}>
                <Logo style={{ cursor: 'pointer' }} />
              </Link>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem sx={{ width: 250 }}>
                  <Button sx={{ m: 'auto' }}>
                    <Link
                      to='about'
                      duration={500}
                      smooth={true}
                      onClick={handleCloseNavMenu}
                    >
                      Хто я
                    </Link>
                  </Button>
                </MenuItem>
                <MenuItem sx={{ width: 250 }}>
                  <Button sx={{ m: 'auto' }}>
                    <Link
                      to='triggers'
                      duration={500}
                      smooth={true}
                      onClick={handleCloseNavMenu}
                    >
                      Послуги
                    </Link>
                  </Button>
                </MenuItem>
                <MenuItem sx={{ width: 250 }}>
                  <Button sx={{ m: 'auto' }} href='#about'>
                    <Link
                      to='accord'
                      duration={500}
                      smooth={true}
                      onClick={handleCloseNavMenu}
                    >
                      Питання
                    </Link>
                  </Button>
                </MenuItem>
                <MenuItem sx={{ width: 250 }}>
                  <Button sx={{ m: 'auto' }} href='#about'>
                    <Link
                      to='contact'
                      duration={500}
                      smooth={true}
                      onClick={handleCloseNavMenu}
                    >
                      Контакти
                    </Link>
                  </Button>
                </MenuItem>
              </Menu>
            </Box>
            <Box
              component='div'
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              <Logo />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                href='#about'
                sx={{ my: 2, color: 'primary', display: 'block' }}
              >
                Хто Я
              </Button>
              <Button sx={{ my: 2, color: 'primary', display: 'block' }}>
                <Link to='triggers' duration={500} smooth={true}>
                  Послуги
                </Link>
              </Button>
              <Button sx={{ my: 2, color: 'primary', display: 'block' }}>
                <Link to='accord' duration={600} smooth={true}>
                  Питання
                </Link>
              </Button>
              <Button sx={{ my: 2, color: 'primary', display: 'block' }}>
                <Link to='contact' duration={700} smooth={true}>
                  Контакти
                </Link>
              </Button>
            </Box>
            <Button onClick={handleOpen} variant='outlined'>
              Замовити консультацію
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            mb={3}
            pl={3}
          >
            Замовте зворотній зв'язок за вашим запитом
          </Typography>
          <Container>
            <ContactForm />
          </Container>
        </Box>
      </Modal>
    </header>
  );
};

export default Navbar;
