import { Button } from '@mui/material';
import React from 'react';
import Banner from '../Banner/Banner';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
      <div>
          <Menu></Menu>
          <h1>This is Home</h1>
          <Button variant="contained">submit</Button>
          <Footer></Footer>
      </div>
  );
};

export default Home;
