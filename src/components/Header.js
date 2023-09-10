import { FiUsers } from 'react-icons/fi'
import { HiOutlineArrowDownCircle } from 'react-icons/hi2'
import bg_video from '../images/header.mp4'

const Header = () => {

    return (
        <div className='h-screen relative'>
            <video
                src={bg_video}
                className='h-full w-full object-cover'
                autoPlay
                loop
                muted
                type="video/mp4"
            />

            <div className='absolute z-10 inset-0 flex flex-col justify-center items-center text-center pt-20'>
                <h1 className='font_serif_caption text-[80px]'>VI DESIGNAR <br /> HEMSIDOR</h1>
                <h2 className='font_serif_caption text-[23px]'>OCH ALLT DÄROMKRING</h2>
                <div className='flex gap-2'>
                    <FiUsers size={25} />
                    <HiOutlineArrowDownCircle size={25} />
                </div>
            </div>
        </div>
    )
}

export default Header