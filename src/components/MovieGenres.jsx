import { useState } from "react"

function MovieGenres() {
  const [MovieGenres,setMovieGenres] = useState([
    'Adventure','Animation','Biography','Crime','Comedy','Documentary'
  ])


  return (
    <div className="w-full flex gap-[1.5rem] flex-wrap justify-center items-center p-[2rem]">
      {
        MovieGenres.map((category,index) => (
            <span key={index} className={index % 2 === 0 ?'bg-[#ff0000be] rounded-full flex justify-center w-[300px] px-10 py-2 cursor-pointer hover:scale-[1.1] transition-all'
             :'w-[300px] px-10 py-2 bg-black/90 rounded-full flex justify-center cursor-pointer hover:scale-[1.1] transition-all'}>
              {category}
              </span>
        ))
      }
    </div>
  )
}

export default MovieGenres
