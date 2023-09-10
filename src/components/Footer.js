import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className='bg-gray-100 mt-20 py-20 flex flex-col items-center justify-center gap-2'>
            <h3 className='font_serif_caption text-[30px]'>FOR YOU</h3>
            <p>Vi designar webbsidor och allt däromkring. </p>
            <div className='flex gap-4'>
                <FaLinkedinIn size={24} />
                <AiFillGithub size={24} />
            </div>
        </div>
    )
}

export default Footer