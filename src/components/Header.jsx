import {FaSearch,FaStar} from 'react-icons/fa'
import useScreenWidth from './UseScreenWidth'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useEffect, useLayoutEffect, useState } from 'react'
import api from '../../api/api'


function Header( {Movie} ) {
 const [a,setA] = useState([])
 const [imgUrl,setImgUrl] = useState([])
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
const [RandNum,setRandNum] = useState(0)

useLayoutEffect(() =>{
    setA(`https://image.tmdb.org/t/p/original${Movie.results[RandNum].backdrop_path}`)
})

useEffect(() =>{
    setRandNum(Math.floor(Math.random()* Movie.results.length))
},[])

useEffect(() => {
    ImageFetch()
},[id])

  return (
    <header className={`h-[80vh] w-full text-white relative`}>
        {console.log(a)}
        <div className="w-full h-full bg-[#000000c1]">
            <img className='absolute object-cover w-full h-full z-[-1] ModalImg' src={a}/>
            <div className='flex justify-around items-center p-5 fixed w-full head z-10'>
                <p className='text-[red] font-bold text-4xl sm:text-2xl'>NETFLIX</p>
                   <nav className='hidden list-none sm:block'>
                      <a href='#Home' className='float-left m-2 text-[1.3rem]'>Home</a>
                      <a href='#movies' className='float-left m-2 text-[1.3rem]'>Movies</a>
                      <a href='#Discover' className='float-left m-2 text-[1.3rem]'>Discover</a>
                   </nav>
                {screenSize < 761? <FaSearch />: <input type='text' className='border py-2 px-5 bg-white/20 rounded-full' placeholder='Search...'/>}
            </div>
            <div >
                {
                 <div className='absolute w-[min(100%,600px)] p-5 bottom-0 backdrop-blur rounded ModalText'>
                        <h1 className="text-[2rem] font-bold ">{Movie.results[RandNum].original_title || Movie.results[RandNum].original_name}</h1>
                        <span className="flex  items-center gap-3"><FaStar /> {(Movie.results[RandNum].vote_average).toFixed(2) || null}</span>
                        <p className='text-[0.8rem] sm:text-[1rem]'>{Movie.results[RandNum].overview}</p>
                        <button className='py-[0.5rem] px-[3rem] rounded m-3 bg-[red]'>Watch</button>
                 </div>
                }
            </div>
        </div>
    </header>
  )
}

export default Header
