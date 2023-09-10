import React from 'react'
import bg_video from '../images/header.mp4'
import { RiSearchLine } from 'react-icons/ri'
import Post from '../components/Post'

const Blog = () => {
  return (
    <div className='flex flex-row justify-around gap-10 p-10 mt-20 bg-gray-100'>
      {/* SIDEBAR */}
      <div className='bg-white flex flex-col rounded-[10px] w-80'>
        {/* top */}
        <div className='flex flex-row items-center gap-4 px-8 py-4'>
          <video
            src={bg_video}
            className='h-20 w-20 rounded-full'
            autoPlay
            loop
            muted
            type="video/mp4"
          />

          <h3 className='font_serif text-[25px]'>NYHETER</h3>
        </div>
        {/* search engine */}
        <div className='w-full flex flex-row justify-between'>
          <input type="text" className='border border-r-transparent py-2 px-4 w-full' placeholder='Sök' />
          <button className='border border-l-transparent h-full px-4'><RiSearchLine size={25} /></button>
        </div>

        {/* links */}
        <div className='px-8 py-4 font_serif'>
          <h4 className='font_serif text-[20px]'>Mest lästa</h4>
          <p className='truncate ...'>Det här är en länk</p>
          <p>Det här är en länk</p>
          <p>Det här är en länk</p>
          <h4 className='font_serif text-[20px] mt-4'>Senast postade</h4>
          <p>Det här är en länk</p>
          <p>Det här är en länk</p>
          <p>Det här är en länk</p>
        </div>
      </div>

      {/* MAIN */}
      <div className='w-2/3 flex flex-col gap-10'>
        {/* artikel */}
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default Blog