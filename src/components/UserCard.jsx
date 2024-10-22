import React from 'react'
import "./UserCard.css"
const UserCard = (props) => {
    return(
    <div className='user-container'>
        <a id='user-name' href="(props.link)">{props.name}</a>
        <img id='user-img' src={props.image} alt='profilepic'></img>
        <p id='user-desc'>{props.desc}</p>
    </div>
    )
}
export default UserCard