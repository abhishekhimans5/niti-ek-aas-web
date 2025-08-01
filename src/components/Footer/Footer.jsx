import React from 'react'
import { APP_NAME, NAV_LIST } from '../../constant'
import { SOCIAL_LINKS } from '../../constant'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="app-name">{APP_NAME.name}</div>
        <div className="app-desc">{APP_NAME.description}</div>
        <div className="social-links">
          {SOCIAL_LINKS.map((each, index) => (
            <div className="each-link" key={index}>
              <a href={each.link} target="_blank" rel="noopener noreferrer">
                <img src={each.icon} alt={each.name} />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-right">
        <div className="other-links">
          {NAV_LIST.map((each) => {
            return <div className="each-nav-link">
              <Link 
                className="other-links"
                to={each.url}>{each.name}</Link>
            </div>
          })}
        </div>
        <div className="contact"></div>
      </div>
    </div>
  )
}

export default Footer