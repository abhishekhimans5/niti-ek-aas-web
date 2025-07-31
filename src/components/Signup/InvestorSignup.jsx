import React, { useContext, useState } from 'react'
import '../Login/login.css'
import './signupstep_1.css'
import { SignupDataContext } from './SignupContext';
import { APP_NAME, INV_PRICE, INVESTMENT_TYPE } from '../../constant';
import { isValidUrl } from '../../utils/verifyData';
import { createUser } from '../../api/createUser';
import Spinner from '../Spinner/Spinner';
import { useNavigate } from 'react-router-dom';

function InvestorSignup() {
 const {basicUserCred,setBasicUserCred,setStep} = useContext(SignupDataContext);
 const [error,setError] = useState([]);
 const [displayError,setDisplayError] = useState(false);
 const [isLoading,setIsLoading] = useState(false);
 const navigate = useNavigate();
 
  const handleCreateAccount = async(e) => {
    e.preventDefault();
    // validation 
    let tempError = [];
    if(Number(basicUserCred.min_investment) > Number(basicUserCred.max_investment)){
      tempError.push({
        id : 0,
        msg : 'Invalid Investment combination'
      })
    }
    if(!isValidUrl(basicUserCred.social_media_url)){
      tempError.push({
        id : 1,
        msg : 'Provide valid URL'
      })
    }
    if(!basicUserCred.investment_type || basicUserCred.investment_type === ''){
      tempError.push({
        id : 2,
        msg : 'Please select Investment Type'
      })
    }
    setError(tempError);
    if(tempError?.length > 0){
      console.log(`error : ${JSON.stringify(basicUserCred,null,2)}`)
      console.log(`error : ${JSON.stringify(error)}`)
      setDisplayError(true);
    }else{
      setIsLoading(true);
      setDisplayError(false);
      setError([]);
      setBasicUserCred({
        ...basicUserCred,
        min_investment : Number(basicUserCred.min_investment),
        max_investment : Number(basicUserCred.max_investment)
      })
      const createUserResult = await createUser(basicUserCred);
      setIsLoading(false);

      if(createUserResult.success){
        alert(createUserResult.msg);
        navigate('/user-profile',{
          state : createUserResult.data
        })
      }else{
        alert(createUserResult.msg);
      }
    }
  }
  
  const handleChange = (e) => {
        const {name,value} = e.target;
        setBasicUserCred((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    const handleBackStep = () => {
      setStep(1);
    }
  return (
    <div className="investor-signup-container section-login signup-step-1">
      {isLoading && <Spinner width={"30px"} height={"30px"}/>}
      <form className="investor-signup-form form-login" onSubmit={handleCreateAccount}>
        <h2>{APP_NAME.name}</h2>
        <p>You are almost  there!</p>
        <label for="min_investment" className='investor-signup-label form-login-label'>
                  Minimun Investment
                  <input type="number" 
                          className="form-login-input" 
                          value={basicUserCred.min_investment}
                          onChange={handleChange}
                          required
                          placeholder='e.g. ₹100000'
                          min={INV_PRICE.MIN}
                          max={INV_PRICE.MAX}
                          name='min_investment'/>
        </label>
        <label for="max_investment" className='investor-signup-label form-login-label'>
                  Maximum Investment
                  <input type="number" 
                          className="form-login-input" 
                          value={basicUserCred.max_investment}
                          required
                          onChange={handleChange}
                          placeholder='e.g. ₹500000'
                          min={INV_PRICE.MIN}
                          max={INV_PRICE.MAX}
                          name='max_investment'/>
        </label>
        <label for="social_media_url" className='investor-signup-label form-login-label'>
                  Social Medial Url
                  <input type="text" 
                          className="form-login-input" 
                          value={basicUserCred.social_media_url}
                          onChange={handleChange}
                          placeholder='https://www.linkedin.com/xyz'
                          name='social_media_url'/>
        </label>
        <label for="investment_type" className='investor-signup-label form-login-label'>
          Investment Type
          <select name="investment_type" 
                            className="investor-signup-select form-login-input"
                            value={basicUserCred.investment_type}
                            onChange={handleChange}>
                            <option value="">Select Investment Type</option>
                            {INVESTMENT_TYPE.map((each) => {
                                return(<option key={each.id}
                                    value={each.value}
                                >{each.label}</option>)
                            })}
          </select>
        </label>
        <div className={displayError ? 'error-div-visible' : 'error-div'}>
                {error.map((e) => (
                    <div key={e.id} className="error-msg">{e.msg}</div>
                ))}
            </div>
        <div className="btn-container"
              style={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center',
                width:'80%'
              }}>
          <button className="form-login-button"
                  type='button'
                  style={{width:"100px"}}
                  onClick={handleBackStep}
                    >
                {`←`}
          </button>
          <button className="form-login-button"
                      type='submit'
                      style={{width:"100px"}}>
                  Create Account
          </button>
        </div>

      </form>
      
      
    </div>
  )
}

export default InvestorSignup