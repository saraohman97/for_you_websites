import React from 'react'

const Post = ({ post }) => {
    return (
        <div className='bg-white flex flex-col rounded-[10px] p-10'>
            <h1 className='font-serif italic text-[80px] uppercase'>{post.heading}</h1>
            {/* <p className='font-serif text-gray-600 text-end'>{post.timestamp.toDate().toDateString()}</p> */}
            <p className='font-serif text-gray-600 text-end'>{post.date}</p>

            {post.imgUrl && <img src={post.imgUrl} alt="artikel bild" className='h-80 object-cover my-10' />}

            <p className='columns-2 gap-10'>{post.text}</p>
        </div>
    )
}

export default Post