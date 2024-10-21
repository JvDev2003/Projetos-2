import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, TextField, Typography } from '@material-ui/core';

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(email)
        console.log(password)

        // Aqui vai a logica do login
        // poderia ser criado um custom hook apenas para isso

        //apenas para testes
        if(email === "admin" && password === "admin"){

          navigate("/formEnvio")
        }

        setEmail('')
        setPassword('')
    }

    const handleCadastro = () => {
        navigate('/cadastro')
    }

    return (
      <Container component="main" maxWidth="xs" id="container">
        <Box
          sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant='h5'>Login</Typography>    
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Button
              type="submit"
              fullWidth
              variant="outlined"
            >
              Log In
            </Button>
            <Button
              type="button"
              fullWidth
              variant="outlined"
              onClick={() => handleCadastro()}
            >
              Cadastre-se
            </Button>

          </Box>
        
        </Box>
      </Container>
    );
}

export default Login;