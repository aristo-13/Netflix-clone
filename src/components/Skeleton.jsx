import { useEffect,useState } from "react"

function UseSkeleton({shape,height,width}) {
 const [Shape,setShape] = useState()
 const [Width,setWidth] = useState()
 const [Height,setHeight] = useState()
 

  useEffect(() =>{
     setShape(shape)
     setHeight(height)
     setWidth(width)
  },[])

  if(Shape === 'box'){
    return(
        <div className={`w-[${Width}] h-[${Height}] bg-slate-400 animate-pulse`}>   
        </div>
    )
  }else if(Shape === 'circle'){
    return (
        <div className="w-[${width}] h-[${height}] bg-slate-400 animate-pulse rounded-full">
       
        </div>
    )
  }
}

export default UseSkeleton
