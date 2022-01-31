import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from 'components/Navbar';
import Carousel from 'components/Carousel';
import Accord from 'components/Accord';
import Footer from 'components/Footer';
import Triggers from 'components/Triggers';
import Contact from 'components/Contact';
import About from 'components/About';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4d2c0f',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Carousel />
      <About />
      <Triggers />
      <Accord />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
