import React from 'react'
import avatar from '../images/avatar.jpg';

const Profile = () => {
  return (
    <section className="profile">
      <div classNameName="profile__card">
        <div classNameName="profile__avatar-container">
          <div classNameName="profile__avatar" style={{ backgroundImage: `url(${avatar})` }}></div>
          {/* <button classNameName="profile__button-edit-avatar" type="button" ></button> */}
        </div>
        <div classNameName="profile__info">
          <h1 classNameName="profile__name">Mitka</h1>
          <button classNameName="profile__button-edit button button_type_edit" type="button">EDIT</button>
          <p classNameName="profile__about">mitka.dev@gmail.com</p>
        </div>
      </div>
      {/* <button classNameName="profile__button-add button button_type_add" type="button" ></button> */}
    </section>
  )
}

export default Profile
