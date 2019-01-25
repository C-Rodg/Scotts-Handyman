import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <svg
        enableBackground="new 0 0 100 100"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m5.7 83.9 12.4 11.1 13.2-2.9.6-10.1h13.1v-10.9l13-.6v-7.3l13-5.3v-7.9l-25.8-19.5z" />
        <path d="m94.3 27.6c0-2.3-2-4.1-4.5-4.1-1.4 0-2.7.6-3.5 1.6l-17.5-12.8c1.1-.7 1.8-1.9 1.8-3.2 0-2.3-2-4.1-4.5-4.1-1.8 0-3.4 1-4.1 2.4l-.4-.3-14.5 20.2 25.1 18.7s5.3 3.3 9.9 0l11.9-15.5-.6-.5c.6-.6.9-1.5.9-2.4zm-15.2 6c-1.4 1.9-4.1 2.3-6 .9l-10.1-7.4c-1.9-1.4-2.3-4.1-.9-6s4.1-2.3 6-.9l10.1 7.4c1.9 1.4 2.3 4 .9 6z" />
      </svg>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Scott's Contracting &amp; Handyman Service, LLC.</h1>
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
              props.onOpenArticle('projects')
            }}
          >
            Projects
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
