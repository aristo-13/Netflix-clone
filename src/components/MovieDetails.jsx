import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../../api/api"
import { FaStar } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import Movies from "./Movies"

function MovieDetails() {
    const [Movie,setMovie] = useState([])
    const [isloading,setIsloading] = useState(true)
    const {id} = useParams() 
    const navigate = useNavigate()

const fetchMovie = async() => {
    try{
        const res = await api.get(`/movie/${id}?api_key=ea598ae38f0ceb1ff49d332572c9006e&media_type=movie/`)
        setMovie(res.data)
        console.log(res.data)
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
    <div className="text-white p-2">
       {isloading && <p>Loading...</p>}
       {!isloading &&
         <div className="flex p-10 flex-wrap justify-center items-center">
            <div className="w-[max-content] overflow-hidden sm:w-[350px]">
                <img className="w-[300px] h-[350px] object-contain border rounded" src={'https://image.tmdb.org/t/p/original'+Movie.poster_path} alt="" />
            </div>
            <div className="w-[500px]">
                <h1 className="text-[2rem] font-bold text-center">{Movie.original_title || Movie.original_name}</h1>
                <span className="flex justify-center items-center gap-3"><FaStar /> {(Movie.vote_average).toFixed(2) || null}</span>
                <p>{Movie.overview}</p>
                <div className="w-full flex gap-5 justify-center items-center flex-wrap p-5">
                    <button className="px-[2rem] py-[0.5rem] flex bg-[red] sm:px-[3rem] sm:py-[0.7rem] rounded">WATCH</button>
                    <button onClick={() => navigate('/')} className="px-[2rem] py-[0.5rem] flex bg-[#eaeaef] sm:px-[3rem] sm:py-[0.7rem] rounded text-black">BACK</button>
                </div>
            </div>
         </div>
       }
       <Movies Title='Recommended' Call={`movie/${id}/similar`}/>
    </div>
  )
}

export default MovieDetails
