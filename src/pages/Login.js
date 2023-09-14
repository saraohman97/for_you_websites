import React from 'react'
import Button from '../components/Button'

const Login = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center w-1/2 m-auto'>
        <h2 className='font_serfi_caption text-[30px] text-gray-400 uppercase'>For you websites</h2>
        <h2 className='font_serfi_caption text-[20px] text-gray-300 uppercase'>Logga in</h2>

        <div className='flex flex-col gap-2 w-full my-10'>
            <label>Användarnamn</label>
            <input type="text" className='border-b outline-none' />

            <label>Lösenord</label>
            <input type="text" className='border-b outline-none' />
        </div>

        <div className='flex flex-row justify-around w-full'>
        <Button text='Tillbaka' link='' />
        <Button text='Logga in' link='dashboard' />
        </div>
    </div>
  )
}

export default Login