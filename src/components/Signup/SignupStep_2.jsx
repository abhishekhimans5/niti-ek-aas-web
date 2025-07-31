import React, { useContext } from 'react'
import { SignupDataContext } from './SignupContext';
import BusinessmanSignup from './BusinessmanSignup';
import AdvisorSignup from './AdvisorSignup';
import InvestorSignup from './InvestorSignup';

function SignupStep_2() {
  const {basicUserCred} = useContext(SignupDataContext);

  let roleBasedComponent = null;

  switch (basicUserCred.role) {
    case 'businessman':
      roleBasedComponent = <BusinessmanSignup/>
      break;
    case 'advisor':
      roleBasedComponent = <AdvisorSignup/>
      break;
    case 'investor':
      roleBasedComponent = <InvestorSignup />
      break;
    default:
      break;
  }
  return (
    <>
      {roleBasedComponent}
    </>
    
  )
}

export default SignupStep_2