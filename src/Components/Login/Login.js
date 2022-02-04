import { Button, Link, TextField } from '@mui/material';
import React from 'react';
import Menu from '../Menu/Menu';

const Login = () => {
  return (
      <div>
          <Menu></Menu>
          <h1>This is Login</h1>
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
          label="Password"
          type="password" 
          variant="standard" 
          />
          <br />
          <br />
          <Button style={{width:"20%"}} variant="contained">Login</Button>
          </form>
          <br />
        <Link to="/login"><Button variant ="contained">Already Register</Button></Link>
      </div>
  );
};

export default Login;
