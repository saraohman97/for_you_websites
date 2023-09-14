import React from 'react'
import './button.css'
import { Link } from 'react-router-dom'

const Button = ({text, link, className}) => {

    return (
        <Link to={`/` + link} className={`btn-slice ` + className}>
            <div className="top"><span>{text}</span></div>
            <div className="bottom"><span>{text}</span></div>
        </Link>
    )
}

export default Button