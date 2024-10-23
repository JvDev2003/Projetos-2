import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import FormEnvio from './pages/FormEnvio';
import Lista from './pages/Lista';
import Documento from './pages/Documento';

function App() {
    return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/cadastro' element={<Cadastro />}/>
          <Route path='/formEnvio' element={<FormEnvio/>} />
          <Route path='/lista' element={<Lista/>}/>
          <Route path='/documento/:idParam' element={<Documento/>}/>
        </Routes>
      </BrowserRouter>
      </>
    )
}

export default App;
