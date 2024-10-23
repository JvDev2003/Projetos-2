import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, List, ListItem, ListItemText, Divider} from '@material-ui/core';

const Lista = () => {
    const navigate = useNavigate()
    

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

    const handleItemList = (e: any) => {

        navigate(`/documento/${e.id}`)
    }

    return (
        <Container component="main" maxWidth="xs" id="container">
            <Box
            sx={{
                marginTop: '10vh',
                marginBottom: '10vh',
                textAlign: 'center',
                minWidth: '50vh',            
            }}
            maxWidth="xs"
            >
            <Typography component="h1" variant='h5'>Lista de Documentos</Typography>    
            <List>
                {dados.map((item, index) => (
                <>
                <ListItem key={index} button onClick={() => handleItemList(item)}>
                    <ListItemText primary={item.nome} secondary={item.documento}/>
                </ListItem>
                <Divider/>
                </>
                ))}
            </List>
            </Box>
        </Container>
    )
}

export default Lista