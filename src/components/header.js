import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond">Logo HERE</span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Scott's Handyman</h1>
        <p>
          A website dedicated to the woodworking of Scott. Have a project that
          you need help with?{' '}
          <button
            type="button"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Get a quote
          </button>{' '}
          today
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            type="button"
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
