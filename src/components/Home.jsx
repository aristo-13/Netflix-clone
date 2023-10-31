import { FaFire, FaHashtag, FaVideo, FaLevelUpAlt } from "react-icons/fa"
import MovieGenres from "./MovieGenres"
import Movies from "./Movies"
import { NavLink } from "react-router-dom"


function Home() {


  return (
    <main className="text-white px-5" id="">
       <div className="flex justify-center items-center p-7 border-white/10 border-b">
       <ul className="w-full flex justify-around gap-5 flex-wrap text-[0.8] sm:text-[1.2rem]">
           <NavLink className="text-[1.4rem] flex items-center gap-1 sm:w-max hover:scale-[1.2] transition-all"><FaLevelUpAlt /> Trends now</NavLink>
           <NavLink className="flex items-center gap-1 hover:scale-[1.2] transition-all"><FaFire /> Popular</NavLink>
           <NavLink className="flex items-center gap-1 hover:scale-[1.2] transition-all"><FaHashtag /> Latest</NavLink>
           <NavLink className="flex items-center gap-1 hover:scale-[1.2] transition-all"><FaVideo /> TV show</NavLink>
         </ul>
       </div>
    <MovieGenres />
    <Movies Title={'Trending-Movies'} Call={'trending/all/day'}/>
    <Movies Title={'Porpular'} Call={'movie/popular'}/>
    <Movies Title={'Discover'} Call={'trending/all/day'}/>
    </main>
  )
}

export default Home
