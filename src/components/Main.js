import React from 'react';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Task from './Task';
function Main(props) {
    // const currentUser = React.useContext(CurrentUserContext);
    return (
        <main className="content">

        <section className="section tasks">
          <h1 className="section__title">Your tasks</h1>
          <form className="form form_add-task tasks__form">
            <input type="text" className="tasks__form-input form__input" id="form__input" name="task"/>
              <span className="form__input-error"></span>
              <button className="tasks__add-button button_type_submit" type="submit"></button>
          </form>
          <ul className="tasks__list">
                <Task/>
            <Task />
            <Task />

          </ul>
          <div className="plug section__plug">
            <p className="plug__text">no current tasks, please add them</p>
          </div>
          <div className="tasks__info">
            <div className="tasks__counters">
              <p className="tasks__counter counter">active:&nbsp;<span className="tasks__counter-current">0</span></p>
              <p className="tasks__counter counter">completed:&nbsp;<span className="tasks__counter-completed">0</span></p>
            </div>
          </div>
        </section>
        </main>
    )
}
export default Main;
