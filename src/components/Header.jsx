import {FaSearch} from 'react-icons/fa'
import useScreenWidth from './UseScreenWidth'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../api/api'

function Header() {
 const [imgUrl,setImgUrl] = useState('')
 const screenSize = useScreenWidth()
 const {id} = useParams()

const ImageFetch = async() => {
    try{
        const res = await api.get(`/movie/${id}?api_key=ea598ae38f0ceb1ff49d332572c9006e&media_type=movie/`)
        setImgUrl(res.data)
        console.log(res.data)
    }catch(err){
        console.log(err)
    }
}


window.onscroll = () =>{
    if(window.scrollY > 2){
      document.querySelector('.head').style.backgroundColor = 'black'
    }else{
        document.querySelector('.head').style.backgroundColor = 'transparent'
    }
}
useEffect(() => {
    ImageFetch()
},[id])

  return (
    <header className={`h-[80vh] w-full text-white relative`}>
        <div className="w-full h-full bg-[#0000007d]">
            <img className='absolute object-cover w-full h-full z-[-1]' src={'https://image.tmdb.org/t/p/original'+imgUrl.backdrop_path}/>
            <div className='flex justify-around items-center p-3 fixed w-full head'>
                <p className='text-[red] font-bold text-4xl sm:text-2xl'>NETFLIX</p>
                   <nav className='hidden list-none sm:block'>
                      <li className='float-left m-2 text-[1.3rem]'>Home</li>
                      <li className='float-left m-2 text-[1.3rem]'>Movies</li>
                      <li className='float-left m-2 text-[1.3rem]'>Discover</li>
                   </nav>
                {screenSize < 761? <FaSearch />: <input type='text' className='border py-2 px-5 bg-white/30 rounded-lg' placeholder='Search...'/>}
            </div>
            <div>
                
            </div>
        </div>
    </header>
  )
}

export default Header
