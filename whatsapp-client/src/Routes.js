import React, {lazy, Suspense} from 'react';
import { Route, Routes, Link, Outlet } from 'react-router-dom';

const Index = lazy(() => import("./pages/Index"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

const routes = () => {
  return (
    <Routes>
    <Route path='/' element={<Navbar/>}>
    <Route path='/' element={<Index/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Route>
  </Routes>
  );
};

const Navbar = () =>{
    return(
      <>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
    </nav>
    <Suspense fallback={<h1>Loading...</h1>}>
    <Outlet/>
    </Suspense>
    </>
    );
  }

export default routes