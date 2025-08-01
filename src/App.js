
import { useEffect,useState} from 'react';
import './App.css';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Signup from './components/Signup/Signup';
import TemporaryProfile from './components/Error/TemporaryProfile';
import { setUser } from './api/setUser';
import MultiplePost from './components/Post/MultiplePost';
import { LoggedInUserContext } from './Contexts/LoggedInUSerContext';


function App() {

   const [isLoggedIn,setIsLoggedIn] = useState(false);
   const [userProfile,setUserProfile] = useState({});

  useEffect(() => {
    const fetchUser = async() => {
      const result = await setUser();
      if(result.success){
        setIsLoggedIn(true);
        setUserProfile(result.data);
      }

    }
    fetchUser();
  },[isLoggedIn])
  return (
    <div className="App">
      <BrowserRouter>
        <LoggedInUserContext.Provider value={{isLoggedIn,setIsLoggedIn,userProfile,setUserProfile}}>
          <Navbar />
          <Routes>
            <Route element={<Login />} path='/login' />
            {/* <Route element={<CustomError/>} path='*' /> */}
            <Route element={<MultiplePost/>} path='*' />
            <Route element={<Signup />} path='/signup' />
            <Route element={<TemporaryProfile />} path='/user-profile' />
          </Routes>
          <Footer/>
        </LoggedInUserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
