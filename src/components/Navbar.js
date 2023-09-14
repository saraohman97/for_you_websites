import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import Button from './Button'
import Menu from './Menu'

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [navbar, setNavbar] = useState(false)

    const toggleMenu = () => {
        openMenu
            ? setOpenMenu(false)
            : setOpenMenu(true)
    }

    const changeNavbar = () => {
        window.scrollY >= 10
            ? setNavbar(true)
            : setNavbar(false)
    }
    window.addEventListener('scroll', changeNavbar)

    return (
        <>
            <div className={`fixed top-0 right-0 left-0 z-40 flex justify-between items-center px-8 py-4 pr-16 ${navbar ? 'bg-white shadow' : 'bg-transparent'}`}>
                <div className='flex items-center md:gap-14 gap-8'>
                    <FiMenu size={30} onClick={toggleMenu} className='cursor-pointer' />
                    <Link to='/' onClick={() => window.scrollTo(0, 0)} className='md:text-[35px] text-[25px] font_serif font-bold cursor-pointer'>FOR YOU</Link>
                </div>
                <Button text='Kontakta oss' link='kontakt' className='max-sm:hidden' />
            </div>

            <Menu toggleMenu={toggleMenu} openMenu={openMenu} />
        </>
    )
}

export default Navbar