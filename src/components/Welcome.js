import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo2.svg';
export default class Welcome extends Component {
  render() {
    return (
      <section className="section section-info">
        <div className="logo">
          <img className="logo__image" src={logo} alt="logo"/>
        </div>
        <div className="section-info__text">
          <h1 className="section__title">Welcome to My own TODO app</h1>
          <p className="section__subtitle">Simple and style project based on ReactJS</p>
          <div className="section-info__links">
            <Link className="section__info-link" to="/login">Let's make you list &rarr;</Link>
          </div>
        </div>
      </section>
    )
  }
}
