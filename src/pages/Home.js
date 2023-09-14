import React from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import image from '../images/image.png'
import bg_video from '../images/header.mp4'
import svg from '../images/undraw_electricity_k2ft.svg'
import svg2 from '../images/undraw_engineering_team_a7n2.svg'
import svg3 from '../images/undraw_well_done_re_3hpo.svg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            {/* HEADER */}
            <Header />

            {/* SHOWCASE 1 */}
            <div className='bg-white w-1/2 m-auto my-40 flex flex-col items-center'>
                <div className='w-full justify-start'>
                    <div className='w-20 border border-red-600' />
                </div>
                <p className='mb-12 mt-4'>For you websites bildades 2023 av frontendutvecklaren Sara Öhman. Idén var att skapa enklare hemsidor och shopping-siter för mellanstora och mindre företag och arrangemang. Anledningen till målgruppen är att vi är ett litet företag med mindre resurser och en personligare touch. </p>
                <Button text='Om oss' link='blogg' />
            </div>

            {/* PORTFOLIO */}
            {/* <div className='flex flex-col items-center bg-gray-100'>
                <img src={image} alt="portfolio job" />
                <div className='w-1/2 flex items-center flex-col gap-4 my-20'>
                    <h1 className='text-7xl'>...</h1>
                    <h3 className='font_serif_caption text-[30px]'>LOGOTYPE</h3>
                    <p className='mb-4'>For you websites bildades 2023 av frontendutvecklaren Sara Öhman. Idén var att skapa enklare hemsidor och shopping-siter för mellanstora och mindre företag och arrangemang. Anledningen till målgruppen är att vi är ett litet företag med mindre resurser och en personligare touch. </p>
                    <Button text='Besök' />
                </div>
            </div> */}

            {/* PROCESS */}
            <div className='bg-gray-100 py-32 text-center'>
                <h3 className='font_serif_caption text-[40px] text-center uppercase pb-20'>Hur fungerar det?</h3>
                {/* <div className='w-1/4 m-auto justify-center pt-4 pb-20'>
                    <div className='w-20 border border-red-600' />
                </div> */}

                <div className='w-2/3 m-auto flex flex-wrap gap-20'>
                    {/* box */}
                    <div className='bg-white flex flex-col gap-6 p-6 items-center flex-1 border-t-2 border-red-600 relative'>
                        <div className='flex justify-center items-center h-20 w-20 rounded-full absolute -top-12 bg-white border-t-2 border-red-600'>
                            <h1 className='font_serif_caption text-[60px] text-red-600'>1</h1>
                        </div>
                        <img src={svg} className='mt-10' alt="" />

                        <h3 className='font_serif_caption text-[30px] -mb-2'>Boka konsultation</h3>
                        <p>Första samtalet går ut på att komma fram till en intresse-plan. Vi kommer gemensamt fram till hemsidans storlek, pris och andra moment.</p>
                    </div>

                    {/* box */}
                    <div className='bg-white flex flex-col gap-6 p-6 items-center flex-1 border-t-2 border-red-600 relative'>
                        <div className='flex justify-center items-center h-20 w-20 rounded-full absolute -top-12 bg-white border-t-2 border-red-600'>
                            <h1 className='font_serif_caption text-[60px] text-red-600'>2</h1>
                        </div>
                        <img src={svg2} className='mt-20 mb-10' alt="" />

                        <h3 className='font_serif_caption text-[30px] -mb-2'>Andra konsultationen</h3>
                        <p>Webbutvecklaren har byggt en skiss från första samtalet och här finns möjlighet att ändra detaljer. </p>
                    </div>

                    {/* box */}
                    <div className='bg-white flex flex-col gap-6 p-6 items-center flex-1 border-t-2 border-red-600 relative'>
                        <div className='flex justify-center items-center h-20 w-20 rounded-full absolute -top-12 bg-white border-t-2 border-red-600'>
                            <h1 className='font_serif_caption text-[60px] text-red-600'>3</h1>
                        </div>
                        <img src={svg3} className='mt-10' alt="" />

                        <h3 className='font_serif_caption text-[30px] -mb-2'>Launcha hemsidan</h3>
                        <p>For You Websites använder sig av databasen Firebase, vilket är en av de största servrarna i världen. En server sparar dynamisk information som till exempel kundlistor och bilder. </p>
                    </div>
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
            <form className='md:w-1/2 w-full m-auto px-4 mt-20 flex flex-col items-center'>
                <h2 className='font_serif_caption md:text-[60px] text-[40px] text-center'>KONTAKT</h2>
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
                    <textarea className='border-b-2 w-full outline-none' cols="30" rows="3" />
                </div>

                <Button text='Skicka meddelande' link='' />
            </form>
            <Footer />
        </>
    )
}

export default Home