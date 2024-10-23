import { useParams } from "react-router-dom"
import { Box, Container, Typography, Button } from '@material-ui/core';
import Pdf from "../components/Pdf"

const Documento = () => {
  
  const {idParam} = useParams()
  const dados = [
    {
        id: '1',
        nome: 'teste1',
        documento: 'teste1.pdf'
    },
    {
        id: '2',
        nome: 'teste2',
        documento: 'teste2.pdf'
    },
    {
        id: '3',
        nome: 'teste3',
        documento: 'teste3.pdf'
    }
  ]

  const {id, nome, documento} = dados.filter((dado) => {return dado.id === idParam})[0]
  
  console.log(id,nome,documento)

  return (
    <Container component="main" maxWidth="md" id="container">
      <Box
        sx={{
          margin: '2em 0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant='h5'>Documento</Typography>   
      </Box>
        <Pdf fileUrl="https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf"/>
      <Box
        sx={{
          margin: '2em 0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
        >
            Confirmar Leitura
        </Button>  
      </Box>
    </Container>
  )
}

export default Documento