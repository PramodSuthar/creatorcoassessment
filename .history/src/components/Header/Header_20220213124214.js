import React from 'react'
import './Header.css';

const Header = () => {
    return (
        <div>
            <div>Header</div>
            <button
                type='button'
                onClick={toggleNavList}
                className='btn btn--icon nav__hamburger nav__list-item btn-toggle '
                aria-label='toggle navigation'
            >
                {showNavList ? <CloseIcon /> : <MenuIcon />}
            </button>
        </div>
    )
}

export default Header