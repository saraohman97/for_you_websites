import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='mt-32 flex justify-end items-center flex-row gap-10'>
      <div className='flex flex-col gap-8 w-80'>
        <h3 className='font_serif_caption text-[30px]'>VÄSTERÅS</h3>
        <p>For you websites har kontor i Västerås city i mittersta Sverige. Du når oss på kontoret, telefon eller mail. Följ gärna våra sociala medier. </p>
        <p>Telefon: 070 493 73 54</p>
        <p>Email: foryouwebsites@gmail.com</p>
        <div className='flex gap-4'>
          <FaLinkedinIn size={24} />
          <AiFillGithub size={24} />
        </div>
      </div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1976.94453450816!2d16.53454411197126!3d59.608300543803935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465e61406dcff99f%3A0x82be014fd76014bf!2sBondebacken%2013A%2C%20724%2061%20V%C3%A4ster%C3%A5s!5e0!3m2!1ssv!2sse!4v1694335443080!5m2!1ssv!2sse" width="1000" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">google maps Västerås</iframe>
    </div>
  )
}

export default Contact