import { useState } from 'react';
import { Box, Button, Container, TextField, Typography, Select, MenuItem} from '@material-ui/core';
import { listaProfessores } from '../dados/ListaProfessores';

const FormEnvio = () => {
    const [name, setName] = useState('')
    const [emails, setEmails] = useState<String[]>([])
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [addSelect, setAddSelect] = useState<number[]>([0])
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

    const handleEmail = (e: React.ChangeEvent<{ name?: string; value: unknown }>, index: number) => {
      const novoEmail = e.target.value as string

      //colocar o novo email em posição no array equivalente a key do select a que ele pertence
      setEmails((prevEmails) => {
        prevEmails[index] = novoEmail
        return [...prevEmails]
      });
      
    }

    const handleAddProfessor = () => {
      setAddSelect((prevAddSelect) => [...prevAddSelect, addSelect.reverse()[0]+ 1]);
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
              {addSelect && addSelect.map((_,index) => (
                    <Select
                    onChange={(e) => handleEmail(e, index)}
                    fullWidth
                    variant='outlined'
                    value={emails[index] || ""}
                    key={index}
                  >
                    <MenuItem value="1" disabled selected>Escolha um professor(a)</MenuItem>
                    {professores && professores.map((prof) => (
                      !emails.includes(prof.email)?
                      (<MenuItem value={prof.email} key={prof.email}>{prof.nome}</MenuItem>):
                      (<MenuItem value={prof.email} key={prof.email} disabled hidden>{prof.nome}</MenuItem>) 
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