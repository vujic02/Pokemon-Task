import React from 'react'
import {Navbar, Footer, Main} from "./index"

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  )
}

export default Layout
