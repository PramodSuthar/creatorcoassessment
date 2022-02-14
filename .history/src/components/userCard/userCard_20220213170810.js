import React from 'react'

const userCard = ({ userData }) => {
    return (
        <div className="card">
            <div className="card__title">{userData.name.first} {userData.name.last}</div>
            <div className="card__body">
                <div>{userData.location} </div>
                <div>{userData.phone} </div>
                <div>{userData.cell} </div>
                <div className="card__image"><img src={userData.picture.medium} /></div>
            </div>

        </div>
    )
}

export default userCard