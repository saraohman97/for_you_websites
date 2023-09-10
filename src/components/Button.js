import React from 'react'
import './button.css'
import { Link } from 'react-router-dom'

const Button = ({text, link}) => {
    return (
        <Link to={`/` + link} className="btn-slice">
            <div className="top"><span>{text}</span></div>
            <div className="bottom"><span>{text}</span></div>
        </Link>
    )
}

export default Button