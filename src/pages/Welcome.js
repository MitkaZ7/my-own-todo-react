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
          <h1 className="section__title">Приветствую! Это мой список дел</h1>
          <p className="section__subtitle">Простой и стильный фулл-стек проект на ReactJS</p>
          <div className="section-info__links">
            <Link className="section__info-link" to="/">Попробуйте &rarr;</Link>
          </div>
        </div>
      </section>
    )
  }
}
