import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import MovieDetails from "./components/MovieDetails"
import Movies from "./components/Movies"
import { ModalImg } from "./components/Movies"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} loader={ModalImg}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path='/:id' element={<MovieDetails />} errorElement={<Error />}/>
          <Route path="*" element={<Error />}/>
      </Route>
    )
  )


  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
