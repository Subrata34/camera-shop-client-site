import { Button, Link, TextField } from '@mui/material';
import React from 'react';
import { Footer } from '../Footer/Footer';
import Menu from '../Menu/Menu';

const Register = () => {
  return (
      <div>
          <Menu></Menu>
          <h1>This is Register</h1>
          <form action="">
          <TextField 
          style={{width:"20%"}}
          id="standard-basic" 
          label="Email Address"
          type="email" 
          variant="standard" 
          />
          <br />
          <TextField 
          style={{width:"20%"}}
          id="standard-basic" 
          label="Name"
          type="name" 
          variant="standard" 
          />
          <br />
          <TextField 
          style={{width:"20%"}}
          id="standard-basic" 
          label="Password"
          type="password" 
          variant="standard" 
          />
          <br />
          <TextField 
          style={{width:"20%"}}
          id="standard-basic" 
          label="Retype Password"
          type="password" 
          variant="standard" 
          />
          <br />
          <br />
          <Button style={{width:"20%"}} variant="contained">Login</Button>
          </form>
          <Link to="/login">Login</Link>
          <Footer></Footer>
      </div>
  );
};

export default Register;
