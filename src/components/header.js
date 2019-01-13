import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Scott's Handyman</h1>
        <p>
          A website dedicated to the woodworking &amp; carpentry skills of
          Scott. <br />
          Have a project that you need help with?
        </p>
        <button
          type="button"
          onClick={() => {
            props.onOpenArticle('contact')
          }}
        >
          Get a quote now
        </button>
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
