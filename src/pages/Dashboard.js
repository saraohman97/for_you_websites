import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { addDoc, collection, serverTimestamp, doc, getDoc, updateDoc } from '@firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage'
import { db, storage } from '../firebase'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import moment from 'moment'

const Dashboard = () => {
  const [picked, setPicked] = useState('chart')
  // ['chart', 'blog', 'customers']

  const navigate = useNavigate()
  const [error, setError] = useState(false)
  const [form, setForm] = useState({
    heading: "",
    text: "",
    favorite: false,
    date: moment().format('LL').toString()
  })

  //Upload file to storage
  const [file, setFile] = useState(null)
  const [progress, setProgress] = useState(null)

  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on("state_change", (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done.");
        setProgress(progress)
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      }, (error) => {
        console.log(error)
      },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            setForm((prev) => ({ ...prev, imgUrl: downloadUrl }));
          })
        })
    }
    file && uploadFile();
  }, [file])


  //edit post
  const { id } = useParams()

  useEffect(() => {
    id && getPostDetail();
  }, [id])

  const getPostDetail = async () => {
    const docRef = doc(db, 'posts', id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setForm({ ...snapshot.data() })
    }
  }


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (form.heading === '' || form.text === '') {
      setError(true)
    } else {
      setError(false)

      if (!id) {
        try {
          await addDoc(collection(db, 'posts'), {
            ...form,
            timestamp: serverTimestamp(),
          })
          toast.success('The post was successfylly created!')
          navigate('/')

        } catch (err) {
          console.log(err)
        }
      } else {
        try {
          await updateDoc(doc(db, 'posts', id), {
            ...form,
            timestamp: serverTimestamp(),
          })
          toast.success('The post was successfully updated!')
          navigate('/')

        } catch (err) {
          console.log(err)
        }
      }
    }

  }

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
          <form onSubmit={handleSubmit} className='flex flex-col w-full justify-between h-full'>
            <h1 className='font_serfi_caption text-[20px] brown uppercase border-b pb-4'>Skriv en ny artikel</h1>
            <div className='flex flex-row gap-10 items-center'>
              <div className='flex-1'>
                <label>Rubrik</label>
                <input
                  value={form.heading}
                  name='heading'
                  onChange={handleChange}
                  type="text"
                  className='bg-gray-100 p-2 w-full outline-none'
                />
              </div>

              <input
                accept="image/png,image/jpeg"
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
                className='flex-1' />
            </div>

            <div>
              <label>Text</label>
              <textarea
                value={form.text}
                name='text'
                onChange={handleChange}
                type="text"
                className='w-full outline-none p-2 bg-gray-100' cols="30" rows="10"></textarea>
            </div>

            <div className='flex flex-row gap-4'>
              <input type="checkbox"
                value={form.favorite}
                name='favorite'
                onChange={handleChange}
              />
              <label>Favorit</label>
            </div>
            {error && <span className='text-red-500 mt-4'>Post must contain a title and text.</span>}
            <button
              disabled={progress !== null && progress < 100}
              className={
                progress !== null && progress < 100 ? 'w-20 bg-blue-400 rounded-full self-start'
                  : 'w-40 h-12 text-white bg-blue-400 rounded-full self-start'
              }>
              {progress !== null && progress < 100 && 'Vänta...'}
              {id ? 'Uppdatera' : 'Posta'}
            </button>
            {/* <button className='bg-brown text-white py-2 px-10 rounded uppercase w-fit'>Posta</button> */}
          </form>
        )}

        {picked === 'customers' && (
          <div>customers</div>
        )}

      </div>
    </div>
  )
}

export default Dashboard