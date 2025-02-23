import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Paper } from '@mui/material';
import './login.css';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    navigate("/user");
  };
  const handleGoogleSignup = (e) => {
    e.preventDefault();
    console.log('Continue with Google clicked');
  };
  return (
    <div className="background">
      <Container component="main" maxWidth="xs">
        <Paper 
          elevation={3} 
          style={{ padding: '20px', marginTop: '50%', background: 'white', borderRadius: '20px', border: '1px solid blue' }}
        >
          <Typography variant="h5" align="center" sx={{ color: 'blue', fontSize: '40px', fontFamily: 'serif' }}>
            Login
          </Typography>
          <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
            <TextField
              InputProps={{
                style: { color: 'blue' },
              }}
              InputLabelProps={{
                style: { color: 'blue' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#800000' },
                  '&:hover fieldset': { borderColor: '#800000' },
                  '&.Mui-focused fieldset': { borderColor: '#800000' },
                },
              }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              InputProps={{
                style: { color: 'blue' },
              }}
              InputLabelProps={{
                style: { color: 'blue' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#800000' },
                  '&:hover fieldset': { borderColor: '#800000' },
                  '&.Mui-focused fieldset': { borderColor: '#800000' },
                },
              }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: '20px', backgroundColor: 'blue', borderRadius: '12px', width: '100px', marginLeft: '38%' }}
            >
              Login
            </Button>
            <div className='continue-with'>
              <span className='cont-with-txt'>Continue With :</span>
              <button className='google-signup-btn' onClick={handleGoogleSignup}></button>
            </div>
            <div className="line-container">
              <hr/>
                <span className="line-text">Don't have an account</span>
              <hr />
            </div>
            <div className='signup-box'>
              <center><Button className='signup-button'>Sign Up</Button></center>

            </div>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default LoginPage;
