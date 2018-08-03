import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Still Have Questions?</h2>
      <p>
        Feel free to shoot me an email about my services, favorite games, or the
        e-sports industry in general!
      </p>
    </section>
    <section>
      <h2>Contact</h2>
      <dl className="alt">
        <dt>Phone</dt>
        <dd>(000) 000-0000 x 0000</dd>
        <dt>Email</dt>
        <dd>
          <a href="#">information@untitled.tld</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a href="#" className="icon fa-twitter alt">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-instagram alt">
            <span className="label">Instagram</span>
          </a>
        </li>

        <li>
          <a href="#" className="icon fa-twitch alt">
            <span className="label">Dribbble</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; Eric Moreno<br /> Design: HTML5 UP
    </p>
  </footer>
)

export default Footer