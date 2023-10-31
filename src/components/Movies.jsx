import { useEffect, useState } from "react"
import api from "../../api/api"
import { FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"



export const ModalImg = async () => {
    const res = await api.get(`/trending/all/day?api_key=ea598ae38f0ceb1ff49d332572c9006e&media_type=movie`)
    return res.data
}



function Movies( {Title,Call} ) {
   const [movies,setMovies] = useState([])
   const [isloading,setIsloading] = useState(true)


  
    const fetchMovie = async () =>{
        try{
            const res = await api.get(`/${Call}?api_key=ea598ae38f0ceb1ff49d332572c9006e&media_type=movie`)
            setMovies([res.data])
        }catch(err){
            console.log(err)
        }finally{
            setIsloading(false)
        }
        
    }

    useEffect(() => {
        fetchMovie()
    },[])

  return (
    <section id="movies">
       <h1 className="text-[2rem] font-bold m-[25px]">{Title}</h1>
       <div className="flex justify-center  gap-4 flex-wrap" id={Title}>
         {/* {console.log(movies)} */}
          {isloading && <p className="text-center">loading...</p>}
          {!movies.length > 0 && !isloading && <p className=" text-[1.5rem] text-[red] font-bold text-center">No {Title }  {Title !== 'Trending-Movies' && ' Movies'}</p>}
          {!isloading && movies.length > 0 &&
            movies[0].results.map((movie) => (
                <Link to={`${movie.id}`} key={movie.id} className="w-[150px] sm:w-[200px] overflow-hidden flex flex-col justify-center items-center p-2 bg-white/10 rounded text-[0.8rem] flex-grow-1">
                     <img className='w-[90%] object-contain border rounded' src={'https://image.tmdb.org/t/p/original'+movie.poster_path}/>
                     <h1 className="font-bold p-2">{movie.original_title || movie.original_name}</h1>
                     <div className="w-full flex justify-between items-center text-white/60">
                        <span>{movie.release_date || movie.first_air_date}</span>
                        <span className="flex items-center gap-1"><FaStar />{(movie.vote_average).toFixed(2)}</span>
                     </div>
                </Link>
            ))
          }
       </div>
       {/* <Outlet /> */}
    </section>
  )
}

Movies.defaultProps = {
    Title: 'All Movies'
}

export default Movies
