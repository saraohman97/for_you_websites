import React from 'react'
import image from '../images/image.png'

const Post = ({ post }) => {
    return (
        <div key={post.id} className='bg-white flex flex-col rounded-[10px] p-10'>
            <h1 className='font-serif italic text-[80px] uppercase'>{post.heading}</h1>
            <p className='font-serif text-gray-600 text-end'>{post.dDate} / {post.dMonth}, {post.dYear}</p>
            {/* <p className='font-serif text-gray-600 text-end'>{post.timestamp.toDate().toDateString()}</p> */}

            <img src={image} alt="artikel bild" className='h-80 object-cover my-10' />

            <p className='columns-2 gap-10'>{post.text}</p>
        </div>
    )
}

export default Post