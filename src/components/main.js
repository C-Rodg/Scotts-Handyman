import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

// Placeholder images
import imageMeasure from '../images/placeholder_measure.jpeg'
import imagePlane from '../images/placeholder_planer.jpeg'

class Main extends Component {
  render() {
    const { uploadedContent } = this.props
    let close = (
      <div
        aria-label="Close"
        role="button"
        className="close"
        tabIndex="0"
        onClick={this.props.onCloseArticle}
        onKeyDown={ev => {
          ev.keyCode === 13 && this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img
              src={imagePlane}
              alt="Scott's tools for woodworking projects"
            />
          </span>
          <p>SCOTT'S CONTRACTING & HANDYMAN SERVICE LLC</p>
          <p>General Contractor - ID: SCOTTCS814BJ</p>
          <p>
            SCOTT'S CONTRACTING & HANDYMAN SERVICE LLC provides residential
            remodeling, maintenance and repair services, plus custom
            woodworking.
          </p>
          <p>Small jobs welcomed!</p>
          <p style={{ marginBottom: '10px' }}>Some of our services offered:</p>
          <ul>
            <li>Construction and repair of decks</li>
            <li>Construction and repair of fences</li>
            <li>Construction of garages and outbuildings </li>
            <li>Window and /or door replacement</li>
            <li>Cabinet installation</li>
            <li>Flooring installation</li>
            <li>Installation of handrails</li>
            <li>Siding installation</li>
            <li>Baseboard, window and door casing installation</li>
            <li>Drywall repair</li>
            <li>Insulation installation</li>
            <li>Gutter installation</li>
            <li>Screen repair</li>
            <li>Interior and exterior painting</li>
            <li>Construction of custom cabinets, furniture, shelving</li>
          </ul>

          {close}
        </article>

        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>

          <p>{uploadedContent.projects_title}</p>
          {uploadedContent.projects && uploadedContent.projects.length > 0 ? (
            uploadedContent.projects.map(project => {
              return (
                <figure className="image main">
                  <Img
                    fluid={project.image.childImageSharp.fluid}
                    alt={project.caption}
                  />
                  <figcaption>{project.caption}</figcaption>
                </figure>
              )
            })
          ) : (
            <div>No projects loaded...</div>
          )}

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={imageMeasure} alt="Scott measuring a new project" />
          </span>
          <p>
            Scott's Contracting & Handyman Service LLC is committed to helping
            north central Washington residents maintain and improve their
            properties. Let Scott take on those projects that you have been
            meaning to get to for years.
          </p>
          <p>
            SCOTT'S CONTRACTING & HANDYMAN SERVICE LLC <br />
            730 Seattle St <br />
            Okanogan, WA 98840 <br />
            General Contractor - ID: SCOTTCS814BJ <br />
            <a href="tel:1-509-557-8863">1-509-557-8863</a>
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="POST" data-netlify="true" name="contact">
            <input type="hidden" name="form-name" value="contact" />
            <div className="field half first">
              <label htmlFor="first-name">First Name</label>
              <input type="text" name="first-name" id="first-name" />
            </div>
            <div className="field half">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" name="last-name" id="last-name" />
            </div>
            <div className="field half first">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field half">
              <label htmlFor="phone">Phone</label>
              <input type="tel" name="phone" id="phone" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="mailto:scottscontractinghandyman@gmail.com"
                className="icon fa-envelope"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">Mail</span>
              </a>
            </li>
            <li style={{ display: 'none' }}>
              <a
                href="https://facebook.com"
                className="icon fa-facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li style={{ display: 'none' }}>
              <a
                href="https://instagram.com"
                className="icon fa-instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li style={{ display: 'none' }}>
              <a
                href="https://yelp.com"
                className="icon fa-yelp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">Yelp</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
