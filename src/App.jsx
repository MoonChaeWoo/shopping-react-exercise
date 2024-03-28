import './App.css'
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, useState } from 'react';
import ProductAll from './Components/ProductAll';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const Login = lazy(() => import('./Components/Login'));
  const PrivateRouter = lazy(() => import('./Components/PrivateRouter'));

  const [ auth, setAuth ] = useState(false);
  const [ product, setProduct ] = useState('[]');

  return (
    <>
      <Navbar auth={auth} setAuth={setAuth} product={product}/>
    <Suspense fallback={<div>...loading</div>}>
      <Routes>
        <Route path='/' element={<ProductAll useProduct={[product, setProduct]}/>}/>
        <Route path='/login' element={<Login setAuth={setAuth}/>}/>
        <Route path='/product/:id' element={<PrivateRouter auth={auth}/>}/>
      </Routes>
    </Suspense>
    </>
  )
}

export default App
