import React, { useEffect, useState } from 'react'
import { SignupDataContext } from './SignupContext'
import SignupStep_1 from './SignupStep_1'
import SignupStep_2 from './SignupStep_2'

function Signup() {

  const [step,setStep] = useState(1);

  const [basicUserCred,setBasicUserCred] = useState({
          // for all
          username:"",
          email:"",
          password:"",
          role:"",
          // for business man
          company_name : "",
          company_url : "",
          funding_needed : false,
          business_type : [],
          // for advisor
          availability_type : "",
          years_of_experience : 0, // for both : investor and advisor
          area_of_expertise : "",
          portfolio_url : "",
          // for investors
          min_investment : null,
          max_investment : null,
          investment_type : "",
          social_media_url : "",
          preferred_area_of_investment : [],
      });

      const handleChange = (e) => {
        const {name,value} = e.target.value;
        setBasicUserCred((prev) => ({
          ...prev,
          [name] : value
        }))
      }

      useEffect(() => {
        setBasicUserCred({
          ...basicUserCred,
          company_name : "",
          company_url : "",
          funding_needed : false,
          business_type : [],
          // for advisor
          availability_type : "",
          years_of_experience : 0, // for both : investor and advisor
          area_of_expertise : "",
          portfolio_url : "",
          // for investors
          min_investment : null,
          max_investment : null,
          investment_type : "",
          social_media_url : "",
          preferred_area_of_investment : [],

        })
      },[basicUserCred.role])
  return (
    <SignupDataContext.Provider value={{basicUserCred,setBasicUserCred,handleChange,setStep}}>
      <div className="signup-main-container">
        {step === 1 && <SignupStep_1 nextStep={setStep}/>}
        {step === 2 && <SignupStep_2 />}
      </div>
    </SignupDataContext.Provider>
  )
}

export default Signup