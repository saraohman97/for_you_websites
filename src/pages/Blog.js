import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import { collection, onSnapshot, query } from 'firebase/firestore';

import bg_video from '../images/header.mp4'
import { RiSearchLine } from 'react-icons/ri'
import Post from '../components/Post'
import image from '../images/image.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import moment from 'moment';

const Blog = ({sQuery}) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  //read posts
  useEffect(() => {
    setLoading(true)
    const q = query(collection(db, 'posts'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let postsArr = []
      querySnapshot.forEach((doc) => {
        postsArr.push({ ...doc.data(), id: doc.id })
      })
      setPosts(postsArr)
      return () => unsubscribe()
    })
    setLoading(false)
  }, [])

  return (
    <>
      {loading && <div className='flex items-center justify-center w-full h-96'>Laddar</div>}

      <Navbar />
      <div className='flex flex-row justify-around gap-10 p-10 mt-20 bg-gray-100 items-start'>
        {/* SIDEBAR */}
        <div className='flex flex-col gap-10'>
          <div className='bg-white flex flex-col rounded-[10px] w-80'>
            {/* top */}
            <div className='flex flex-row items-center gap-4 px-8 py-4'>
              <video
                src={bg_video}
                className='object-cover object-center w-20 h-20 rounded-full'
                autoPlay
                loop
                muted
                type="video/mp4"
              />
              <div>
                <h3 className='font_serif text-[25px]'>NYHETER</h3>
                <p className='leading-4 text-xs'>{moment().format('MMMM Do YYYY,')}</p>
                <p className='leading-4 text-xs'>{moment().format('h:mm:ss a')}</p>
              </div>
            </div>

            {/* search engine */}
            <div className='w-full flex flex-row justify-between'>
              <input type="text" className='border border-r-transparent py-2 px-4 w-full outline-none' placeholder='Sök' />
              <button className='border border-l-transparent px-4'><RiSearchLine size={25} /></button>
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

          {/* FAVORITES */}
          <div className='bg-white flex flex-col rounded-[10px] w-80'>
            <h3 className='font_serif text-[25px] px-8 pt-8'>FAVORITER</h3>

            {/* favorite item */}
            <div className='flex flex-col'>
              <h4 className='font_serif text-[20px] p-4'>This is the heading</h4>
              <img src={image} alt="artikel bild" />
              <small className='font_serif text-end px-8 py-4'>10 september, 2023</small>
            </div>
            {/* favorite item */}
            <div className='flex flex-col'>
              <h4 className='font_serif text-[20px] p-4'>This is the heading</h4>
              <img src={image} alt="artikel bild" />
              <small className='font_serif text-end px-8 py-4'>10 september, 2023</small>
            </div>
          </div>

        </div>

        {/* MAIN */}
        <div className='w-2/3 flex flex-col gap-10'>

          {!posts && <div className='flex items-center justify-center w-full h-96'>Det finns inga inlägg</div>}

          {/* posts */}
          {posts && posts
          .map(post => (
            <Post key={post.id} post={post} />
          // .sort((a, b) => a.timestamp.valueOf('timestamp') - b.timestamp.valueOf('timestamp'))
          // .filter((post) => post.title.toLowerCase().includes(sQuery))
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blog