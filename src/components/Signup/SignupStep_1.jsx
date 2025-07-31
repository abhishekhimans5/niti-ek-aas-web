import React, { useContext, useState } from 'react'
import { APP_NAME, USER_ROLE } from '../../constant.js'
import './signupstep_1.css'
import '../Login/login.css'
import { Link } from 'react-router-dom'
import { SignupDataContext } from './SignupContext.js'
import { isValidEmail, isValidPassword } from '../../utils/verifyData.js'

function SignupStep_1() {

    const [displayError,setDisplayError] = useState(false);
    const [error,setError] = useState([]);
    const {basicUserCred,setBasicUserCred,setStep} = useContext(SignupDataContext);
    const handleChange = (e) => {
        const {name,value} = e.target;
        setBasicUserCred((prev) => ({
            ...prev,
            [name] : value
        }))
    }
    

    const handleSubmitStep_1 = (e) => {
        e.preventDefault();
        // logic for validation
        let tempErrorlist = []
        if(basicUserCred.username.trim().length < 4){
            tempErrorlist.push({
                msg : 'Provide valid name',
                id : 0
            });
        }
        if(!isValidEmail(basicUserCred.email)){
            tempErrorlist.push({
                msg : 'Provide valid email',
                id : 1,
            })
        }
        if(!isValidPassword(basicUserCred.password)){
            tempErrorlist.push({
                msg : 'Please use alphanumeric password',
                id : 2
            })
        }
        if(!basicUserCred.role || basicUserCred.role === ""){
            tempErrorlist.push({
                msg : 'Please select role',
                id : 3
            })
        }
        console.log(`error : ${JSON.stringify(tempErrorlist)}`)
        setError(tempErrorlist);
        if(tempErrorlist?.length > 0){
            setDisplayError(true)
            console.log(`error : ${JSON.stringify(error)}`)
        }else{
            console.log(basicUserCred);
            setDisplayError(false);
            setStep(2);
        }
    }
  return (
    <div className="signup-step-1">
        <form  className="signup-step-1-form form-login" onSubmit={handleSubmitStep_1}>
            <h2>{APP_NAME.name}</h2>
            <label for='username' className="signup-step-1-label form-login-label">Name
                <input type="text" 
                        className="signup-step-1-input form-login-input"
                        value={basicUserCred.username}
                        onChange={handleChange}
                        name='username'/>
            </label>
            <label for='email' className="signup-step-1-label form-login-label">Email
                <input type="email" 
                        className="signup-step-1-input form-login-input"
                        value={basicUserCred.email}
                        onChange={handleChange}
                        name='email'/>
            </label>
            <label for='password' className="signup-step-1-label form-login-label">Password
                <input type="password" 
                        className="signup-step-1-input form-login-input"
                        value={basicUserCred.password}
                        onChange={handleChange}
                        name='password'/>
            </label>
            <label className="form-login-label">Role</label>
            <select name="role" 
                    className="signup-step-1-user-role form-login-input"
                    value={basicUserCred.role}
                    onChange={handleChange}>
                    <option value="">Select Role</option>
                    {USER_ROLE.map((each) => {
                        return(<option key={each.id}
                            value={each.role}
                        >{each.label}</option>)
                    })}
            </select>
            <div className={displayError ? 'error-div-visible' : 'error-div'}>
                {error.map((e) => (
                    <div key={e.id} className="error-msg">{e.msg}</div>
                ))}
            </div>
            <button className="signup-step-1-btn  form-login-button"
                    type='submit'>Continue
            </button>
            <div className="login-to-signup-link">
                <p>Already have an account?</p>
                <Link to='/login'
                    style={{
                    textDecoration:"underline",
                    cursor:"pointer",
                    color:"#fff000"}}
                >Login Now!</Link>
                
            </div>
        </form>
    </div>
  )
}

export default SignupStep_1