import {BrowserRouter} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './pages/Main';
import {GlobalStyle} from './styles/global'
import {Provider} from 'react-redux'
import store from './store/store';
import Rotas from './rotas'


function App() {

  const [blackHeader, setBlackHeader] = useState(false)


  useEffect(()=>{
    const scrollListener = ()=>{
      if(window.scrollY >15){
        setBlackHeader(true)
      }else{
        setBlackHeader(false)

      }
    }

    window.addEventListener('scroll', scrollListener)

    return ()=> window.removeEventListener('scroll', scrollListener)
    
  }, [blackHeader])

  return (
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer autoClose={3000}/>
        <Header black={blackHeader} />
        <Rotas/>
        <GlobalStyle/>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
