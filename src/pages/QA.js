import React from 'react'
import bg_video from '../images/header.mp4'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const QA = () => {
  return (
    <>
    <Navbar />
      {/* SHOWCASE 1 */}
      <div className='h-[800px] flex justify-center items-center flex-row'>
        <video
          src={bg_video}
          className='h-96 absolute -left-32'
          autoPlay
          loop
          muted
          type="video/mp4"
        />

        <div className='w-96 ml-96'>
          <h3 className='font_serif_caption text-[30px]'>Varför ska du välja oss?</h3>
          <div className='w-full justify-start my-4'>
            <div className='w-20 border border-red-600' />
          </div>
          <p>For you websites har kontor i Västerås city i mittersta Sverige. Du når oss på kontoret, telefon eller mail. Också, följ gärna våra sociala medier. For you websites har kontor i Västerås city i mittersta Sverige. Du når oss på kontoret, telefon eller mail. Också, följ gärna våra sociala medier. </p>
        </div>

        <video
          src={bg_video}
          className='h-96 absolute -right-[500px]'
          autoPlay
          loop
          muted
          type="video/mp4"
        />
      </div>

      {/* SHOWCASE 2 */}
      <div className='flex justify-between items-center flex-row'>
        <div className='w-96 ml-40'>
          <h3 className='font_serif_caption text-[30px]'>Varför ska du skaffa en hemsida?</h3>
          <div className='w-full justify-start my-4'>
            <div className='w-20 border border-red-600' />
          </div>
          <p>For you websites har kontor i Västerås city i mittersta Sverige. Du når oss på kontoret, telefon eller mail. Också, följ gärna våra sociala medier. For you websites har kontor i Västerås city i mittersta Sverige. Du når oss på kontoret, telefon eller mail. Också, följ gärna våra sociala medier. </p>
        </div>

        <video
          src={bg_video}
          className='h-96'
          autoPlay
          loop
          muted
          type="video/mp4"
        />
      </div>

      {/* SHOWCASE 3 */}
      <div className='flex justify-center items-center mt-52'>
        <video
          src={bg_video}
          className='h-96'
          autoPlay
          loop
          muted
          type="video/mp4"
        />
      </div>
      <Footer />
    </>
  )
}

export default QA