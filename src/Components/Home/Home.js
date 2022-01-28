import { Button } from '@mui/material';
import React from 'react';
import Menu from '../Menu/Menu';

const Home = () => {
  return (
      <div>
          <Menu></Menu>
          <h1>This is Home</h1>
          <Button variant="contained">submit</Button>
      </div>
  );
};

export default Home;
