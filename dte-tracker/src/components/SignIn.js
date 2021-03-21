import PropTypes from 'prop-types'
import Button from './Button'
import { useState } from 'react'
import loginBackground from '../images/uh-health-shands-childrens-hospital_0.png'

const Header = () => {
    return (
        <header>
            <div>
                <img src={loginBackground} alt="Shands Background"
                style ={{

                }}
                />
            </div>
            <h1>User Login</h1>
            <div className = "form">
                <div className = "form-group">
                    <label htmlFor="username"> Email </label>
                    <input type="text" id = "username" placeholder = "example@gmail.com" />
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
