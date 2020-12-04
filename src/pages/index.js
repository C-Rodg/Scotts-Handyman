import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
      currentTitle: TitleMapping['/'],
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }
  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
    document.addEventListener('mousedown', this.handleClickOutside, false)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }

  handleOpenArticle(article) {
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article,
      currentTitle: TitleMapping[article],
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout,
      })
    }, 350)
  }

  handleCloseArticle() {
    this.setState({
      currentTitle: TitleMapping['/'],
      articleTimeout: !this.state.articleTimeout,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: '',
      })
    }, 350)
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        const isScrollClick =
          window.innerWidth - event.clientX < 35 ? true : false
        if (!isScrollClick) {
          this.handleCloseArticle()
        }
      }
    }
  }

  render() {
    return (
      <Layout location={this.props.location} title={this.state.currentTitle}>
        <div
          className={`body ${this.state.loading} ${
            this.state.isArticleVisible ? 'is-article-visible' : ''
          }`}
        >
          <div id="wrapper">
            <Header
              onOpenArticle={this.handleOpenArticle}
              timeout={this.state.timeout}
            />
            <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
              setWrapperRef={this.setWrapperRef}
              uploadedContent={this.props.data}
            />
            <Footer timeout={this.state.timeout} />
          </div>
          <div id="bg" />
        </div>
      </Layout>
    )
  }
}

const TitleMapping = {
  '/': 'Home',
  intro: 'Intro',
  about: 'About',
  projects: 'Projects',
  contact: 'Contact',
}

export default IndexPage

export const mainQuery = graphql`
  query MainQuery {
    Projects: allFile(
      filter: { absolutePath: { regex: "/project_gallery.md$/" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              projects_title
              projects {
                image {
                  childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                caption
              }
            }
          }
        }
      }
    }
    About: allFile(filter: { absolutePath: { regex: "/about.md$/" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              about_title
              about_image {
                childImageSharp {
                  fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
    Intro: allFile(filter: { absolutePath: { regex: "/intro.md$/" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              intro_title
              intro_subtitle
              intro_list_title
              intro_list_items {
                item
              }
              intro_image {
                childImageSharp {
                  fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
