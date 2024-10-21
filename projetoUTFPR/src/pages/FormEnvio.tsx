import { useState, useRef } from 'react';
import { Box, Button, Container, TextField, Typography } from '@material-ui/core';

const FormEnvio = () => {
    const [name, setName] = useState('')
    const [emails, setEmails] = useState('')
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if(!event.target.files){
        console.log("Upload vazio")
        return
      }

      setSelectedFile(event.target.files[0]);
    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      console.log(name)
      console.log(emails)
      console.log(selectedFile)

      setName('')
      setEmails('')
      setSelectedFile(null)
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
          <Typography component="h1" variant='h5'>Formulário de Envio de Documentos</Typography>    
          <Box component="form" onSubmit={handleSubmit}>
              <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Nome do aluno"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
                  value={name}
              />

              <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Emails dos professores"
                  name="email"
                  autoFocus
                  onChange={(e) => setEmails(e.target.value)}
                  value={emails}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                type="file"
                onChange={handleFileChange}
              />
              <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
              >
                  Enviar
              </Button>
          </Box>
        </Box>
      </Container>
    );
}

export default FormEnvio