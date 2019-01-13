import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      Contractor ID: SCOTTCS814BJ
    </p>
    <p className="copyright">
      Design:{' '}
      <a
        href="https://curtisrodgers.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Curtis Rodgers
      </a>
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
