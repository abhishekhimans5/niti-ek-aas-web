
import { useEffect, useState } from 'react';
import './App.css';
import CustomError from './components/Error/CustomError';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Signup from './components/Signup/Signup';
import TemporaryProfile from './components/Error/TemporaryProfile';
import { setUser } from './api/setUser';
import MultiplePost from './components/Post/MultiplePost';


function App() {

  const [data,setData] = useState({});
  const [userProfile,setUserProfile] = useState('');

  useEffect(() => {
    const isLoggedIn = async() => {
      const result = await setUser();
      console.log(JSON.stringify(result,null,2));
    }
    isLoggedIn();
  },[])
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Login />} path='/login' />
          {/* <Route element={<CustomError/>} path='*' /> */}
          <Route element={<MultiplePost/>} path='*' />
          <Route element={<Signup />} path='/signup' />
          <Route element={<TemporaryProfile />} path='/user-profile' />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
