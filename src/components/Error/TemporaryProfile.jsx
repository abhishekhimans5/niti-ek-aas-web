import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { shortNameExtractor } from '../../utils/shortNameExtractor';
import './temporaryprofile.css'

const TemporaryProfile = (props) => {
    const location = useLocation();

    const data = location.state || props.data || {};
  return (
    <div className="main-container">
        {/* {JSON.stringify(data,null,2)} */}
        <div className="profile">
            <div className="pic">
                {shortNameExtractor(data.name)}
            </div>
            <div className="name">{data.name}</div>
        </div>
        <div className="data-container">
            <div className="left">
                <p className="label">Email</p>
                <p className="label">Role</p>
                <p className="label">Status</p>
                <p className="label">Funding Required</p>
                <p className="label">Experience</p>
            </div>
            <div className="right">
                <p className="value">{data.email || '--'}</p>
                <p className="value">{data.role || '--'}</p>
                <p className="value">{data.status || '--'}</p>
                <p className="value">{data.fundingNeeded ? 'Yes' : 'No'}</p>
                <p className="value">{data.yearsOfExperience || '--'}</p>
            </div>
        </div>
        <div className="warning">
            {!data.isVerified && <Link>Verify your Email</Link>}
        </div>

    </div>
  )
}

export default TemporaryProfile