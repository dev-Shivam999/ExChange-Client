import React, { Suspense, lazy, memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './Components/Head/Loader';
import Header from './Components/Head/Header';
import Footer from './Components/footer/Footer';

const Home = lazy(() => import("./pages/Home"))
const Product = lazy(() => import("./pages/Product"))
const Profile = lazy(() => import("./pages/Profile"))
const Login = lazy(() => import("./pages/Login"))
const Sign = lazy(() => import("./pages/Sign"))
const Pic = lazy(() => import("./pages/Pic"))
const PC = lazy(() => import("./pages/PC"))
const Result = lazy(() => import("./pages/Result"))
const Otp = lazy(() => import("./pages/Otp"))
const ProfileEdits = lazy(() => import("./pages/ProfileEdits"))
const Search = lazy(() => import("./pages/Search"))
const Add = lazy(() => import("./pages/Add"))

const App: React.FC = memo(() => {
  return (
    < >
      <Header />
      <Suspense fallback={<Loader />}>

        <Routes>
          <Route path='/Login' element={
            <Login />
          } />
          <Route path='/sign' element={
            <Sign />
          } />
            <Route path='/img/:id' element={<Pic />} />
          
          <Route path='/profile' element={
            
            <Profile />
            
          } />

          
          <Route path='/otp' element={
            <Otp />
          } />



          <Route path='/' element={
            <Home />
 
          } />
          <Route path='/Product/:id' element={

            <Product />

          } />
          <Route path='/Profile/:id/edits/text' element={

            <ProfileEdits />

          } />




         



          <Route path='/Cart' element={

            <PC />

          } />



         


          <Route path='/Search/q/:id' element={

            <Result />

          } />
          <Route path='/Search' element={

            <Search />

          } />
          <Route path='/Add' element={

            <Add />

          } />


        </Routes>
      </Suspense>
      <Footer/>
    </>
  );
});

export default App;