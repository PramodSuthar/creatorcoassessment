import React from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import { ThemeContext } from '../../contexts/theme'

import './Header.css';

const Header = () => {
    const [{ themeName, toggleTheme }] = useContext(ThemeContext)

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