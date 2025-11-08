import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axiosClient';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await axios.post('/auth/login', { email, password });
    if (res.data.access_token) {
      localStorage.setItem('token', res.data.access_token);
      localStorage.setItem('userId', res.data.userId);
      navigate('/shop');
    }
  };

  const style = {
    '& .MuiOutlinedInput-root': {
      height: 55,
      fontSize: 13,
      borderRadius: '10px',
      borderColor: '#A8A8A9',
      backgroundColor: '#F3F3F3',
    },
    '& .MuiInputBase-input': {
      '::placeholder': {
        color: '#676767',
        opacity: 1,
      },
      fontSize: 13,
    },
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        maxWidth: '375px',
        height: '100vh',
        flexGrow: 1,
        boxShadow: 1,
        padding: 0,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: '26px',
          height: '100%',
          width: '100%',
          flex: 1,
          bgcolor: 'white',
        }}
      >
        {/* Title */}
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography sx={{ fontSize: '36px', fontWeight: 700 }}>Welcome</Typography>
          <Typography sx={{ fontSize: '36px', fontWeight: 700 }}>Back!</Typography>
        </Box>

        {/* Form */}
        <TextField
          sx={{ ...style, mt: '35px' }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            },
          }}
          placeholder="Username or Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type={showPassword ? 'text' : 'password'}
          value={password}
          placeholder="Password"
          sx={{ ...style, mt: '30px' }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    aria-label={showPassword ? 'hide the password' : 'display the password'}
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: 400,
            textAlign: 'right',
            color: '#F83758',
            mt: '6px',
          }}
        >
          Forgot Password?
        </Typography>

        {/* Button login */}
        <Button
          sx={{
            mt: '40px',
            borderRadius: '4px',
            height: '55px',
            backgroundColor: '#F83758',
            fontSize: '18px',
            fontWeight: 600,
          }}
          variant="contained"
          onClick={handleLogin}
        >
          Login
        </Button>

        {/* Block other signin */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '50px' }}>
          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: 500,
              textAlign: 'center',
              color: '#575757',
            }}
          >
            - OR Continue with -
          </Typography>
          <Box sx={{ display: 'flex', mt: '16px', gap: '10px' }}>
            <img src="/public/assets/socialLogin/google.png" alt="google-login" />
            <img src="/public/assets/socialLogin/apple.png" alt="apple-login" />
            <img src="/public/assets/socialLogin/facebook.png" alt="facebook-login" />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: '30px' }}>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 400,
                textAlign: 'center',
                color: '#575757',
                mr: '6px',
              }}
            >
              Create An Account
            </Typography>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 600,
                textAlign: 'center',
                color: '#F83758',
                textDecoration: 'underline',
              }}
            >
              Sign Up
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
