import { useContext, useState } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import { ThemeContext } from '../../contexts/theme'

import './Header.css';
import logoLightMode from '../../assets/images/creator-logo-black.svg';
import logoDarkMode from '../../assets/images/creator-logo-white.svg';

const Header = () => {
    const [{ themeName, toggleTheme }] = useContext(ThemeContext)

    return (
        <div className='header-main'>
            <div>{themeName === 'dark' ? < img src={logoDarkMode} alt="Logo" /> : < img src={logoLightMode} alt="Logo" />}</div>
            <button
                type='button'
                onClick={toggleTheme}
                className='btn-theme'
                aria-label='toggle theme'
            >
                {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
            </button>
        </div>
    )
}

export default Header