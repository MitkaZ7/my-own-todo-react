import React from 'react';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';
export default function Task(props) {


  // const currentUser = React.useContext(CurrentUserContext);
  // const isOwn = props.card.owner._id === currentUser._id;
  // const isLiked = props.card.likes.some(myLike => myLike._id === currentUser._id);
  // const buttonLikeClassName = (`button_type_like ${isLiked ? 'button_type_like-active' : ''}`);
  // const buttonDeleteClassName = (`place__button-remove ${isOwn ? 'place__button-remove_status-active' : ''}`);
  function handleTaskClick() {
    props.onTaskClick(props.task);
  }
  function handleDeleteClick() {
    props.onTaskDelete(props.task);
  }

    return (
        // <li className="place">
        // {isOwn && <button className={buttonDeleteClassName} onClick={handleDeleteClick}></button>}
        //     <figure className="place__card">
        //         <div className="place__image" onClick={handleClick} style={{ backgroundImage: `url(${props.card.link})`}}></div>
        //         <figcaption className="place__caption">
        //             <h2 className="place__name">{props.card.name}</h2>
        //             <div className="place__like-container">
        //       <button className={buttonLikeClassName} type="button" onClick={handleLikeClick}></button>
        //                 <span className="place__counter-likes">{props.card.likes.length}</span>
        //             </div>
        //         </figcaption>
        //     </figure>
        // </li>
      <li className="task" onTaskClick={handleTaskClick}>
      <div className="task__content">
        <button className="button task__button-edit"></button>
        <label className="task__input-label">
          <span className="task__text"></span>
          <input className="task__input-сhbx" type="checkbox"/>
          <span className="task__checkbox"></span>
        </label>
          <button className="button task__button-remove" onTaskDelete={handleDeleteClick}></button>
      </div>
    </li>
    )
}

