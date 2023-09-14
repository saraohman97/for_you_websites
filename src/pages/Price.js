import React from 'react'
import img from '../images/image.png'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Price = () => {
  return (
    <>
    <Navbar />
    <div>
      <div className='h-[650px] flex justify-center items-center flex-col'>
        <h1 className='font_serif_caption text-[80px]'>PRISLISTA</h1>
        <p className='w-1/2'>En bra hemsida kostar mellan 15 - 25 000 kr. Sen spelar det självklart roll vad man ska ha hemsidan till. En mer avancerad hemsida som kräver specialfunktioner kommer att kosta mer. Men är du ute efter en enklare hemsida för tjänster eller produkter ska hemsidan inte kosta en förmögenhet.</p>
      </div>

      <div className='flex flex-row items-end'>
        <div className='p-20'>
          <h3 className='font_serif_caption text-[30px]'>LOGOTYPE</h3>
          <div className='w-full justify-start my-3'>
            <div className='w-20 border border-red-600' />
          </div>
          <p>Standardhemsida med 4-5 undersidor, simpel design, ingen sökmotoroptimering och enkel mobilanpassning. Därav 800kr/h i 20-30h att byrån utvecklar hemsidan. Bilder ingår. Webhotell 60-150kr/mån. Domän 129kr/år. Programvara mm.
            4900-6900 kr</p>
        </div>

        <img src={img} alt="" className='w-2/3' />
      </div>

      <div className='flex flex-row items-center mt-52'>
        <img src={img} alt="" className='w-2/3' />

        <div className='p-20'>
          <h3 className='font_serif_caption text-[30px]'>LOGOTYPE</h3>
          <div className='w-full justify-start my-3'>
            <div className='w-20 border border-red-600' />
          </div>
          <p>Standardhemsida med 4-5 undersidor, simpel design, ingen sökmotoroptimering och enkel mobilanpassning. Därav 800kr/h i 20-30h att byrån utvecklar hemsidan. Bilder ingår. Webhotell 60-150kr/mån. Domän 129kr/år. Programvara mm.
            4900-6900 kr</p>
        </div>
      </div>

    </div>
    <Footer />
    </>
  )
}

export default Price