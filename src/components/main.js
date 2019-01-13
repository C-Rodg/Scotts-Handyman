import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Placeholder images
import imageMeasure from '../images/placeholder_measure.jpeg'
import imagePlane from '../images/placeholder_planer.jpeg';

// Work images
import workBedframe from '../images/work/work_bedframe.jpg'
import workCabinets from '../images/work/work_cabinets.jpg'
import workChest from '../images/work/work_chest.jpg'
import workCoffeeTable from '../images/work/work_coffeetable.jpg'
import workDeck1 from '../images/work/work_deck1.jpg'
import workDeck2 from '../images/work/work_deck2.jpg'
import workDeck3 from '../images/work/work_deck3.jpg'
import workFence1 from '../images/work/work_fence1.jpg'
import workFence2 from '../images/work/work_fence2.jpg'
import workGate from '../images/work/work_gate.jpg'
import workRailing from '../images/work/work_railing.jpg'
import workStable1 from '../images/work/work_stable1.jpg'
import workStable2 from '../images/work/work_stable2.jpg'
import workVanity from '../images/work/work_vanity.jpg'

class Main extends Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
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
            <img src={imagePlane} alt="Scott's tools for woodworking projects" />
          </span>
          <p>
            **TODO** - Basic Intro, Services offered -Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
          <p>
          **TODO** - Intro continued - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          
          <p>
            **TODO - INTRO SUMMARY OF WORK**Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. 
          </p>
          <figure className="image main">
            <img src={workBedframe} alt="" />
            <figcaption>**TODO**Information about project</figcaption>
          </figure>
          <figure className="image main">
            <img src={workCabinets} alt="" />
            <figcaption>**TODO**Information about project</figcaption>
          </figure>
          <figure className="image main">
            <img src={workChest} alt="" />
            <figcaption>**TODO**Information about project</figcaption>
          </figure>
          <figure className="image main">
            <img src={workCoffeeTable} alt="" />
            <figcaption>**TODO**Information about project</figcaption>
          </figure>
          <figure className="image main">
            <img src={workDeck1} alt="" />
            <figcaption>**TODO**Information about project</figcaption>
          </figure>
          <figure className="image main">
            <img src={workDeck2} alt="" />
            <figcaption>**TODO**Information about project</figcaption>
          </figure>
          <figure className="image main">
            <img src={workDeck3} alt="" />
            <figcaption>**TODO**Information about project</figcaption>
          </figure>
          <figure className="image main">
            <img src={workFence1} alt="" />
            <figcaption>**TODO**Information about project</figcaption>
          </figure>
          <figure className="image main">
            <img src={workFence2} alt="" />
            <figcaption>**TODO**Information about project</figcaption>
          </figure>
          <figure className="image main">
            <img src={workGate} alt="" />
            <figcaption>**TODO**Information about project</figcaption>
          </figure>
          <figure className="image main">
            <img src={workRailing} alt="" />
            <figcaption>**TODO**Information about project</figcaption>
          </figure>
          <figure className="image main">
            <img src={workStable1} alt="" />
            <figcaption>**TODO**Information about project</figcaption>
          </figure>
          <figure className="image main">
            <img src={workStable2} alt="" />
            <figcaption>**TODO**Information about project</figcaption>
          </figure>
          <figure className="image main">
            <img src={workVanity} alt="" />
            <figcaption>**TODO**Information about project</figcaption>
          </figure>
          
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
          **TODO** - About your experience, etc. - Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
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
          <form method="post" data-netlify="true" name="contact">
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
                href="mailto:test@gmail.com"
                className="icon fa-envelope"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">Mail</span>
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                className="icon fa-facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                className="icon fa-instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
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
