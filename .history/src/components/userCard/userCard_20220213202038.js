import React, { useCallback, useRef, useState } from 'react';
// Styles
import { Wrapper } from './UserCard.styles';
import './UserCard.css'


const UserCard = ({ user }) => {
    const [showMore, setShowMore] = useState(false)
    const [pageNumber, setPageNumber] = useState(1);


    const switchMode = () => {
        setShowMore((prevShowMore) => !prevShowMore);
    }
    const RegistrationDate = user.registered.date.substr(0, 10)

    const observer = useRef()
    const lastBookElementRef = useCallback(node => { //useCallback to initiate a Callback function attached to the useRef 

        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [])

    return (
        <Wrapper >
            <div className="container">
                <article className='card'>
                    <div onClick={switchMode}>
                        <img className='card-img' src={user.picture.medium} alt='name' />
                        <div>{user.name.first} {user.name.last}</div>
                    </div>
                    <div >{showMore && (
                        <div>
                            <p>Gender: {user.gender}</p>
                            <p>location: {user.location.country}</p>
                            <p>Email: {user.email}</p>
                            <p>Age: {user.dob.age}</p>
                            <p>Phone: {user.phone}</p>
                            <p>Registered Date: {RegistrationDate}</p>
                        </div>
                    )}</div>
                </article>
                <div ref={lastBookElementRef}></div>
            </div>
        </Wrapper >
    )
}

export default UserCard;
