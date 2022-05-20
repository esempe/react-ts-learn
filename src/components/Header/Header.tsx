import React from 'react'
import style from'./Header.module.css';


const Header = () => {
    return (
        <div className="Header">
                <div className={style.Header}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Wikimedia-logo.png/480px-Wikimedia-logo.png" />
                </div>
        </div>
    )
}

export default Header
