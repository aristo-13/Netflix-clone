import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"


function Layout() {
  return (
    <main className="overflow-hidden">
       <Header />
       <section>
          <Outlet />
       </section>
       <Footer />
    </main>
  )
}

export default Layout
