import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

class Main extends Component {
  render() {
    const {
      uploadedContent: { Intro, About, Projects },
    } = this.props
    const projectsData = Projects.edges[0].node.childMarkdownRemark.frontmatter
    const introData = Intro.edges[0].node.childMarkdownRemark.frontmatter
    const aboutData = About.edges[0].node.childMarkdownRemark.frontmatter

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
            <Img
              fluid={introData.intro_image.childImageSharp.fluid}
              alt="Scott's tools for woodworking projects"
            />
          </span>
          <p>SCOTT'S CONTRACTING & HANDYMAN SERVICE LLC</p>
          <p>General Contractor - ID: SCOTTCS814BJ</p>
          <p>{introData.intro_title}</p>
          <p>{introData.intro_subtitle}</p>
          <p style={{ marginBottom: '10px' }}>{introData.intro_list_title}</p>
          <ul>
            {introData.intro_list_items && introData.intro_list_items.length > 0
              ? introData.intro_list_items.map((listItem, idx) => {
                  return <li key={idx}>{listItem.item}</li>
                })
              : null}
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

          <p>{projectsData.projects_title}</p>
          {projectsData.projects && projectsData.projects.length > 0 ? (
            projectsData.projects.map((project, idx) => {
              return (
                <figure className="image main" key={idx}>
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
            <Img
              fluid={aboutData.about_image.childImageSharp.fluid}
              alt="Scott measuring a new project"
            />
          </span>
          <p>{aboutData.about_title}</p>
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
