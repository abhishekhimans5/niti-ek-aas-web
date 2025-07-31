import React from 'react'
import './spinner.css'

const Spinner = ({width,height}) => {
  return (
    <div className="spinner-overlay">
      <div className="spinner" style={{width:width,height:height}}></div>
    </div>
  );
}

export default Spinner