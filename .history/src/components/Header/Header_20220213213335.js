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
            <div className='assess-text'>{themeName === 'dark' ? < img className='header-main_logo' src={logoDarkMode} alt="Logo" /> : < img className='header-main_logo' src={logoLightMode} alt="Logo" />} Assessment</div>
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