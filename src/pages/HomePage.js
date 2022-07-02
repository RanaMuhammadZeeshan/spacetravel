import React from 'react'

import HomeHeading from '../components/homeHeading/HomeHeading'

const HomePage = () => {
  return (
    <React.Fragment>
      {/* <div className="min-h-screen min-w-full flex flex-col justify-evenly  bg-cover bg-center bg-image-mobile md:bg-image-tablet xl:bg-image-desktop bg-no-repeat">
        <section id="home-heading" className="max-w-[90%] mx-auto">
          <HomeHeading />
        </section>
      </div> */}
      {/* <Layout> */}
      <div className=" flex flex-col justify-evenly">
        <section id="home-heading" className="max-w-[90%] mx-auto">
          <HomeHeading />
        </section>
      </div>
      {/* </Layout> */}
    </React.Fragment>
  )
}

export default HomePage
