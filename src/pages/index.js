import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import profile from '../assets/images/EricProfile.jpg'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Gamers Call Me E-Rock,</h2>
                </header>
                <p>
                  But you can call me Eric Moreno. I'm a health science graduate
                  with nearly a decade of competitive gaming experience under my
                  belt. I excel especially at first person shooters and sports
                  games, and I'm comfortable on a variety of different consoles
                  and platforms.
                </p>
              </div>
              <span className="image">
                <img src={profile} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Why E-Sports?</h2>
              <p>
                E-sports are the rising star of modern entertainment platforms,
                and gamers are flocking to monetize their skills through
                sponsorships and tournaments. Schedule an appointment with me to
                get started on your own gaming career.
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-signal" />
                <strong>$906</strong>million revenue '18
              </li>
              <li className="style2">
                <span className="icon fa-users" />
                <strong>380</strong>million viewers
              </li>
              <li className="style3">
                <span className="icon fa-eye" />
                <strong>84</strong>mins avg. watch
              </li>
              <li className="style4">
                <span className="icon fa-arrow-up" />
                <strong>29%</strong>annual growth
              </li>
              <li className="style5">
                <span className="icon fa-diamond" />
                <strong>$1.5B</strong>est. revenue 2021
              </li>
            </ul>

            <footer className="major">
              <ul className="actions">
                <li>
                  <a href="http://www.espn.com/esports/" className="button">
                    Learn More
                  </a>
                </li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>My Top Games</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-fort-awesome" />
                <h2>Fortnite</h2>
                <p>
                  I'll walk you through survival strategies, where to find the
                  best loot, and how to use the map's landscape to your
                  advantage.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-fighter-jet" />
                <h2>Call of Duty</h2>
                <p>
                  Tactical button layouts, class configuration, and maximizing
                  your kill/death ratio-- I'll teach you how to become a COD
                  King step by step.
                </p>
              </li>
              <li>
                <span className="major icon style5">
                  <FontAwesomeIcon class="major" icon={faBasketballBall} />
                </span>
                <h2>NBA 2k</h2>
                <p>
                  As a lifelong basketball player and avid sports fan, I'll walk
                  you through techniques that work on the virtual court as well
                  as the real deal.
                </p>
              </li>
            </ul>
            <footer className="major" />
          </section>

          <section id="third" className="main special">
            <header className="major">
              <h2>My Services</h2>
            </header>
            <ul className="features">
              <li>
                <span className="major icon style5">
                  <FontAwesomeIcon icon={faChalkboardTeacher} />
                </span>
                <h2>Book a Session</h2>
                <p>
                  Schedule an exclusive appointment with me and learn from a
                  professional gamer one-on-one.
                </p>
              </li>
              <li>
                <span className="major icon style3">
                  <FontAwesomeIcon icon={faEye} />
                </span>
                <h2>Watch My Tutorials</h2>
                <p>
                  Check into my Youtube or a livestream on Twitch to see my
                  skills in a competitive gaming environment.
                </p>
              </li>
              <li>
                <span className="major icon style1">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <h2>Subscribe for News</h2>
                <p>
                  Each week I'll send out an update about my latest techniques,
                  strategies, and insights-- be sure to subscribe below!
                </p>
              </li>
            </ul>
            <footer className="major" />
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Let's Play.</h2>
              <p>
                Schedule an appointment for a coaching session, or subscribe to
                my weekly newsletter with the latest in gaming tips and
                strategies.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
                    Book Now
                  </Link>
                </li>
                <li>
                  <Link to="/generic" className="button">
                    Subscribe
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
