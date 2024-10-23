import { useState } from 'react';
import { Box, Button, Container, TextField, Typography, Select, MenuItem} from '@material-ui/core';
import { listaProfessores } from '../dados/ListaProfessores';

const FormEnvio = () => {
    const [name, setName] = useState('')
    const [emails, setEmails] = useState<String[]>([])
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [addSelect, setAddSelect] = useState<any[]>([])
    const [professores, setProfessores] = useState(listaProfessores)

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
      setEmails([])
      setSelectedFile(null)
    }

    const handleEmail = (e: React.ChangeEvent<{ name?: string; value: unknown }>) => {
      const novoEmail = e.target.value as string
      setEmails((prevEmails) => [novoEmail, ...prevEmails]);

      // filtrar Apenas professores que não estão na lista
      setProfessores(listaProfessores.filter((prof) => !emails.includes(prof.email)));

      console.log(emails)
      console.log(professores)
      
    }

    const handleAddProfessor = () => {
      setAddSelect((prevAddSelect) => [...prevAddSelect, prevAddSelect.length]);
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

              <Select
                onChange={handleEmail}
                fullWidth
                variant='outlined'
                value="1"
              >
                <MenuItem value="1" disabled selected>Escolha um professor(a)</MenuItem>
                {professores && professores.map((prof) => (
                  <MenuItem value={prof.email} key={prof.email}>{prof.nome}</MenuItem>
                ))}
              </Select>
              {addSelect && addSelect.map((_, index) => (
                    <Select
                    onChange={handleEmail}
                    fullWidth
                    variant='outlined'
                    value="1"
                    key={index}
                  >
                    <MenuItem value="1" disabled selected>Escolha um professor(a)</MenuItem>
                    {professores && professores.map((prof) => (
                      <MenuItem value={prof.email} key={prof.email}>{prof.nome}</MenuItem>
                    ))}
                  </Select>
              ))}
              <Button
                  type="button"
                  fullWidth
                  variant="outlined"
                  onClick={handleAddProfessor}
              >
                  Adicionar outro professor
              </Button>

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

              // <TextField
              //     variant="outlined"
              //     margin="normal"
              //     required
              //     fullWidth
              //     id="email"
              //     label="Emails dos professores"
              //     name="email"
              //     autoFocus
              //     onChange={(e) => setEmails(e.target.value)}
              //     value={emails}
              // />