import React, { useContext, useState } from 'react'
import './login.css'
import { APP_NAME } from '../../constant'
import loginUser from '../../api/loginUser.js'
import { Link, useNavigate } from 'react-router-dom'
import { isValidEmail, isValidPassword } from '../../utils/verifyData.js'
import Spinner from '../Spinner/Spinner.jsx'
import { LoggedInUserContext } from '../../Contexts/LoggedInUSerContext.js'
import TemporaryProfile from '../Error/TemporaryProfile.jsx'

function Login(props) {

    const {isLoggedIn,setIsLoggedIn,userProfile,setUserProfile} = useContext(LoggedInUserContext);
    const [formField,setFromField] = useState({
        email : "",
        password : "",
    })
    const [isLoading,setIsLoading] = useState(false);
    const navigate = useNavigate();

    // for handling change in the fields
    const handleChange = (e) => {
        const {name,value} = e.target;

        setFromField((prev) => ({
            ...prev,
            [name] : value,
        }))
    }

    // for logout :
    const handleLogout = () => {
        setIsLoggedIn(false)
        setUserProfile({})
        localStorage.removeItem('token');
    }

    // for handling form Login

    const handleLogin = async(e) => {
        e.preventDefault();
        
        if(formField?.email?.length > 10 
            && formField?.password?.length > 8
            && isValidEmail(formField.email)
            && isValidPassword(formField.password)
        ){
            setIsLoading(true)
            const loginResult = await loginUser(formField);
            setIsLoading(false)
            if(loginResult.success){
                alert(loginResult.msg);
                setIsLoggedIn(true);
                setUserProfile(loginResult.data);
                navigate('/user-profile',{
                    state : loginResult.data,
                });
            }else{
                alert(`${loginResult.msg}, Try again with correct credential`)
            }
        }else{
            alert(`please provide a valid information`)
        }
    }

  return (
    <>{isLoggedIn ? <div>
        <TemporaryProfile data={userProfile}/>
        <button className="form-login-button"
                    onClick={handleLogout}>
                Logout
            </button>
    </div> :
    
    <div className="section-login" >
        {isLoading && <Spinner width={"30px"} height={"30px"}/>}
        <form onSubmit={handleLogin} className='form-login'>
            <h2>{APP_NAME.name}</h2>
            <label for="email" className='form-login-label'>
                Email
                <input type="text" 
                        className="form-login-input" 
                        value={formField.email}
                        onChange={handleChange}
                        name='email'/>
            </label>
            <label for="password" className='form-login-label'>
                Password
                <input type="password" 
                        className="form-login-input"
                        value={formField.password}
                        onChange={handleChange}
                        name='password' />
            </label>
            <button className="form-login-button"
                    type='submit'>
                Login
            </button>
            <div className="login-to-signup-link">
                <p>Don't have an account? </p>
                <Link to='/signup'
                    style={{
                    textDecoration:"underline",
                    cursor:"pointer",
                    color:"#fff000"}}
                >Create Now!</Link>
                
            </div>
        </form>
        
    </div>
    }</>
  )
}

export default Login