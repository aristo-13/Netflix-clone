import { FaFire, FaHashtag, FaVideo, FaLevelUpAlt } from "react-icons/fa"
import MovieGenres from "./MovieGenres"
import Movies from "./Movies"


function Home() {


  return (
    <main className="text-white px-5">
       <div className="flex justify-center items-center p-7 border-white/10 border-b">
       <ul className="w-full flex justify-around gap-5 flex-wrap text-[0.8] sm:text-[1.2rem]">
           <h2 className="text-[1.4rem] flex items-center gap-1 sm:w-max"><FaLevelUpAlt /> Trends now</h2>
           <li className="flex items-center gap-1"><FaFire /> Popular</li>
           <li className="flex items-center gap-1"><FaHashtag /> Latest</li>
           <li className="flex items-center gap-1"><FaVideo /> TV show</li>
         </ul>
       </div>
    <MovieGenres />
    <Movies Title={'Trending Movies'} Call={'trending/all/day'}/>
    <Movies Title={'Porpular'} Call={'movie/popular'}/>
    <Movies Title={'Discover'} Call={'trending/all/day'}/>
    </main>
  )
}

export default Home
