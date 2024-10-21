import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import FormEnvio from './pages/FormEnvio';
function App() {
    return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/cadastro' element={<Cadastro />}/>
          <Route path='/formEnvio' element={<FormEnvio/>} />
        </Routes>
      </BrowserRouter>
      </>
    )
}

export default App;
