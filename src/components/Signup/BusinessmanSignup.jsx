import React, { useContext, useEffect } from 'react'
import '../Login/login.css'
import './signupstep_1.css'
import { APP_NAME, BUSINESS_TYPE, INVESTMENT_TYPE } from '../../constant'
import { SignupDataContext } from './SignupContext';
import Select from 'react-select';

function BusinessmanSignup() {
  const {basicUserCred,setBasicUserCred,setStep} = useContext(SignupDataContext);

  const handleChange = (e) => {
        const {name,value,type,checked} = e.target;

        setBasicUserCred((prev) => ({
            ...prev,
            [name] : type === 'checkbox' ? checked : value
        }))
    }
  
  const handleChangeMultiSelect = (selected,name) => {
    console.log(selected,name)
    setBasicUserCred((prev) => ({
      ...prev,
      [name] : selected ? selected.map(opt => opt.value) : [],
    }));
  }
  const handleBackStep = () => {
    setStep(1);
  }
  // useEffect(() => {
  //   console.log('Updated basicUserCred:', basicUserCred);
  // }, [basicUserCred]);


  return (
    <div className="businessman-signup signup-step-1">
      <form  className="businessman-signup-form form-login">
        <h2>{APP_NAME.name}</h2>
                <p>You are almost  there!</p>
                <label for="company_name" className='businessman-signup-label form-login-label'>
                          Company Name
                          <input type="text" 
                                  className="form-login-input" 
                                  value={basicUserCred.company_name}
                                  onChange={handleChange}
                                  name='company_name'/>
                </label>
                <label for="company_url" className='businessman-signup-label form-login-label'>
                          Company Url
                          <input type="text" 
                                  className="form-login-input" 
                                  value={basicUserCred.company_url}
                                  onChange={handleChange}
                                  placeholder='(Optional)'
                                  name='company_url'/>
                </label>
                <label for="funding_needed" className='signup-checkbox-label'>
                          Funds Needed
                          <input type="checkbox" 
                                  className="signup-checkbox-input" 
                                  value={basicUserCred.funding_needed}
                                  checked={!!basicUserCred.funding_needed}
                                  onChange={handleChange}
                                  name='funding_needed'/>
                </label>
                <label for="business_type" className='signup-mutliselect-label'>
                  Business Type
                  <Select name="business_type" 
                      // className="investor-signup-select form-login-input"
                      className='signup-mutliselect-box'
                      options={BUSINESS_TYPE}
                      value={basicUserCred.business_type.map(val => 
                              BUSINESS_TYPE.find(opt => opt.value === val)
                            )}
                      placeholder='Select business type'
                      isMulti
                      onChange={(selected) => handleChangeMultiSelect(selected,'business_type')}>
                  </Select>
                </label>
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

export default BusinessmanSignup