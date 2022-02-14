import React from 'react'
import './Header.css';

const Header = () => {
    return (
        <div>
            <div>Header</div>
            <button
                type='button'
                onClick={toggleTheme}
                className=' btn--icon nav__theme nav__list-item'
                aria-label='toggle theme'
            >
                {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
            </button>
        </div>
    )
}

export default Header