import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../header/Navbar'

const Layout = ({ children }) => {
  const location = useLocation()
  const [bgClasses, setBgClasses] = useState('')

  useEffect(() => {
    if (location.pathname === '/') {
      setBgClasses('bg-image-mobile md:bg-image-tablet xl:bg-image-desktop')
    } else if (location.pathname === '/destination') {
      setBgClasses(
        ' bg-image-destination-mobile md:bg-image-destination-tablet xl:bg-image-destination-desktop'
      )
    } else if (location.pathname === '/crew') {
      setBgClasses(
        'bg-image-crew-mobile md:bg-image-crew-tablet xl:bg-image-crew-desktop'
      )
    } else if (location.pathname === '/technology') {
      setBgClasses(
        'bg-image-technology-mobile md:bg-image-technology-tablet xl:bg-image-technology-desktop'
      )
    }
  }, [location])

  return (
    <React.Fragment>
      <div className={`backgroundImageStyle ${bgClasses}`}>
        <header>
          <Navbar pathname={location.pathname} />
        </header>

        <main>{children}</main>
      </div>
    </React.Fragment>
  )
}

export default Layout
