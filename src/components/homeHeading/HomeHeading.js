import React from 'react'
import { Link } from 'react-router-dom'

const HomeHeading = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center xl:flex-row xl:justify-between  m-28 gap-y-6   xl:gap-y-0 ">
        {/* Content Container */}
        <div className="flex flex-col justify-center xl:w-1/2">
          <div className="space-y-4 md:space-y-8">
            <div className=" text-center">
              <h5 className="font-barlow text-base md:text-xl leading-5 tracking-[0.169rem]  text-secondary">
                SO, YOU WANT TO TRAVEL TO
              </h5>
            </div>

            <div className="text-center">
              <h1 className="font-Bellefair text-[5rem] md:text-9xl  xl:text-[9.38rem]  xl:leading-[9.38rem] text-tertiary ">
                SPACE
              </h1>
            </div>

            <div className="text-center ">
              <p className="text-secondary font-barlow text-base leading-6 md:w-96 xl:w-auto">
                Let's face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we'll give you a truly out
                of this world experience!
              </p>
            </div>
          </div>
        </div>

        {/* Explore Button Container */}
        <Link
          to={'/destination'}
          className="text-primary   shadow-md font-Bellefair text-xl md:text-2xl xl:text-3xl tracking-[0.078rem] text-center flex justify-center self-center items-center bg-tertiary w-36 md:w-44 xl:w-64 h-36 md:h-44 xl:h-64 rounded-full mt-10 animate-pulse hover:animate-none hover:shadow-lg xl:place-self-end z-10"
        >
          Explore
        </Link>
      </div>
    </React.Fragment>
  )
}

export default HomeHeading
