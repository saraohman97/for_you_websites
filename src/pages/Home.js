import React from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import image from '../images/image.png'
import bg_video from '../images/header.mp4'

const Home = () => {
    return (
        <>
            {/* HEADER */}
            <Header />

            {/* SHOWCASE 1 */}
            <div className='bg-white w-1/2 m-auto my-40 flex flex-col items-center gap-12'>
                <p>For you websites bildades 2023 av frontendutvecklaren Sara Öhman. Idén var att skapa enklare hemsidor och shopping-siter för mellanstora och mindre företag och arrangemang. Anledningen till målgruppen är att vi är ett litet företag med mindre resurser och en personligare touch. </p>
                <Button text='Om oss' link='blogg' />
            </div>

            {/* PORTFOLIO */}
            <div className='flex flex-col items-center bg-gray-100'>
                <img src={image} alt="portfolio job" />
                <div className='w-1/2 flex items-center flex-col gap-4 my-20'>
                    <h1 className='text-7xl'>...</h1>
                    <h3 className='font_serif_caption text-[30px]'>LOGOTYPE</h3>
                    <p className='mb-4'>For you websites bildades 2023 av frontendutvecklaren Sara Öhman. Idén var att skapa enklare hemsidor och shopping-siter för mellanstora och mindre företag och arrangemang. Anledningen till målgruppen är att vi är ett litet företag med mindre resurser och en personligare touch. </p>
                    <Button text='Besök' />
                </div>
            </div>

            {/* WHITE SPACE */}
            <video
                src={bg_video}
                className='h-96 w-full object-cover'
                autoPlay
                loop
                muted
                type="video/mp4"
            />

            {/* CONTACT FORM */}
            <form className='w-1/2 m-auto mt-20 flex flex-col items-center'>
                <h2 className='font_serif_caption text-[60px] text-center'>KONTAKT</h2>
                <p className='mb-20 text-center'>Kontakta oss via kontaktformuläret eller ring 070 493 73 54, </p>

                <div className='flex mb-8 w-full'>
                    <label className='w-1/3'>Fullständigt namn:</label>
                    <input type="text" className='border-b-2 w-full outline-none' />
                </div>

                <div className='flex mb-8 w-full'>
                    <label className='w-1/3'>Email address:</label>
                    <input type="text" className='border-b-2 w-full outline-none' />
                </div>

                <div className='flex items-end mb-20 w-full'>
                    <label className='w-1/3'>Meddelande:</label>
                    <textarea className='border-b-2 w-full outline-none' cols="30" rows="5" />
                </div>

                <Button text='Skicka meddelande' link='' />
            </form>
        </>
    )
}

export default Home