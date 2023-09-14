import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [picked, setPicked] = useState('chart')
  // ['chart', 'blog', 'customers']

  return (
    <div className='bg-gray-200 flex flex-row h-screen'>
      {/* SIDEBAR */}
      <div className='relative w-96'>
        <div className='fixed top-0 bottom-0 left-0 w-96 bg-white shadow-lg flex flex-col justify-between'>
          <div className='flex flex-col'>
            <div className='border-b border-gray-200 pb-10 text-center m-10'>
              <h2 className='font_serfi_caption text-[30px] brown uppercase'>For you websites</h2>
              <h2 className='font_serfi_caption text-[20px] text-gray-300 uppercase'>Dashboard</h2>
            </div>

            <div onClick={() => setPicked('chart')} className={`cursor-pointer ml-10 py-2 border-r-4 border-transparent mt-10 ${picked === 'chart' ? 'b-brown brown font-bold' : 'text-gray-300 hover:text-gray-400'}`}>Försäljningschart</div>
            <div onClick={() => setPicked('blog')} className={`cursor-pointer ml-10 py-2 border-r-4 border-transparent ${picked === 'blog' ? 'b-brown brown font-bold' : 'text-gray-300 hover:text-gray-400'}`}>Blogg</div>
            <div onClick={() => setPicked('customers')} className={`cursor-pointer ml-10 py-2 border-r-4 border-transparent ${picked === 'customers' ? 'b-brown brown font-bold' : 'text-gray-300 hover:text-gray-400'}`}>Kunder</div>
          </div>
          <Link to='/' className='text-white bg-brown w-80 mx-8 mb-8 p-2 rounded text-center uppercase'>Logga ut</Link>
        </div>
      </div>

      {/* MAIN */}
      <div className='m-10 p-10 flex-1 bg-white rounded-[10px] shadow-lg'>

        {picked === 'chart' && (
          <div>chart</div>
        )}

        {picked === 'blog' && (
          <div className='flex flex-col w-full justify-between h-full'>
            <h1 className='font_serfi_caption text-[20px] brown uppercase border-b pb-4'>Skriv en ny artikel</h1>
            <div className='flex flex-row gap-10 items-center'>
              <div className='flex-1'>
                <label>Rubrik</label>
                <input type="text" className='bg-gray-100 p-2 w-full outline-none' />
              </div>

              <input type="file" className='flex-1' />
            </div>

            <div>
              <label>Text</label>
              <textarea className='w-full outline-none p-2 bg-gray-100' cols="30" rows="10"></textarea>
            </div>

            <div className='flex flex-row gap-4'>
              <input type="checkbox" />
              <label>Favorit</label>
            </div>

            <button className='bg-brown text-white py-2 px-10 rounded uppercase w-fit'>Posta</button>
          </div>
        )}

        {picked === 'customers' && (
          <div>customers</div>
        )}

      </div>
    </div>
  )
}

export default Dashboard