import PropTypes from 'prop-types'
import Button from './Button'
import { useState } from 'react'

const Header = () => {
    return (
        <header>
            <h1>User Login</h1>
            <div className = "form">
                <div className = "form-group">
                    <label htmlFor="username"> Username </label>
                    <input type="text" id = "username" placeholder = "user@gmail.com" />
                </div>
                <div className = "form-group">
                    <label htmlFor="password"> Password </label>
                    <input type="text" id = "password" placeholder = "password" />
                </div>

                <Button text ="Login" name = {document.getElementById('name')} />
            </div>
        </header>
    )
}

export default Header
