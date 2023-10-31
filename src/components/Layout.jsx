import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { useLoaderData } from "react-router-dom"


function Layout() {
    const Movie = useLoaderData()

  return (
    <main className="overflow-hidden">
       <Header Movie={Movie}/>
       <section>
          <Outlet />
       </section>
       <Footer />
    </main>
  )
}

export default Layout
