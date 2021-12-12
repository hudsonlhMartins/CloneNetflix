import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './pages/Main'
import MySalve from './pages/MySalve'





export default function Rotas (){

    return(
        
            <Routes>
                <Route path='/' element={<Main/>} />
                <Route path='/mysalve' element={<MySalve/>} />
            </Routes>
        
    )
}