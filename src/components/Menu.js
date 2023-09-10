import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import Button from './Button'

const Menu = ({ toggleMenu, openMenu }) => {
  return (
    <div className={`bg-white fixed z-40 right-0 left-0 ${openMenu ? 'top-0 transition-all ease-in-out duration-500' : '-top-[100%] transition-all ease-in-out duration-500'}`}>
      {/* NAVBAR */}
      <div className='flex justify-between items-center px-8 py-4 pr-16'>
        <div className='flex items-center gap-14'>
          <AiOutlineClose size={30} onClick={toggleMenu} className='cursor-pointer' />
          <Link to='/' onClick={toggleMenu} className='text-[35px] font_serif font-bold cursor-pointer'>FOR YOU</Link>
        </div>
        <Button text='Kontakta oss' />
      </div>

      {/* MENU CONTENT */}
      <div className='px-52 py-20 flex flex-row shadow'>
        <div className='flex flex-col flex-1 gap-2'>
          <div>Portfolio</div>
          <p>a-link</p>
          <p>a-link</p>
          <p>a-link</p>
          <p>a-link</p>
          <div className='flex gap-4'>
            <FaLinkedinIn size={24} />
            <AiFillGithub size={24} />
          </div>
        </div>

        <div className='flex flex-col flex-1 gap-2'>
          <Link to='/pris' onClick={toggleMenu} className='p-2'>Prislista</Link>
          <Link to='/blogg' onClick={toggleMenu} className='p-2'>Blogg</Link>
          <Link to='/kontakt' onClick={toggleMenu} className='p-2'>Kontakta Oss</Link>
          <Link to='/Q&A' onClick={toggleMenu} className='p-2'>Q & A</Link>
        </div>
      </div>
    </div>
  )
}

export default Menu