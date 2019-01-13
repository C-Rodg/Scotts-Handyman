import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      &copy; Design:{' '}
      <a
        href="https://curtisrodgers.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Curtis Rodgers
      </a>
      . Contractor ID: SCOTTCS814BJ
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
