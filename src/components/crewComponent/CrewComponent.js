import React, { useEffect, useState } from 'react'
import StepHeading from '../reuseableComponents/StepHeading'
import CrewButtonNav from './CrewButtonNav'

import useDetectSafari from '../../customHooks/useDetectSafari'
import data from '../../data/data.json'

const CrewComponent = () => {
  const { crew } = data

  const [selectedCrew, setSelectedCrew] = useState({})
  const [currentNav, setCurrent] = useState(0)

  const safariAgent = useDetectSafari()

  const step = '02'
  const stepHeadingText = 'Meet your crew'

  const selectCrewHandler = (crewIndex) => {
    setSelectedCrew(crew[crewIndex])
    setCurrent(crewIndex)
  }

  useEffect(() => {
    setSelectedCrew(crew[0])
  }, [crew])

  return (
    <React.Fragment>
      <div className="flex justify-center items-center md:justify-start">
        <StepHeading step={step} stepHeadingText={stepHeadingText} />
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 xl:grid-cols-2 place-content-center  mx-auto  mt-8 gap-y-8 xl:gap-y-0 xl:gap-x-6  xl:mx-0 xl:place-content-end">
        <div className="md:order-last mx-auto xl:mx-0">
          <img
            src={
              safariAgent
                ? selectedCrew?.images?.png
                : selectedCrew?.images?.webp
            }
            alt={selectedCrew?.name}
            className="w-80 md:w-[28.5rem] xl:w-[35.5rem] h-56 md:min-h-[48.25rem] xl:min-h-[44.5rem] object-contain object-center border-b-2 md:border-none border-secondary/20"
          />
        </div>

        <div className="flex flex-col mx-auto space-y-8 md:space-y-4 justify-center ">
          <div className="flex justify-center items-center md:order-last xl:justify-start xl:mt-32">
            <CrewButtonNav
              currentNav={currentNav}
              selectCrewHandler={selectCrewHandler}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <h2 className="text-center xl:text-start text-tertiary/50 mix-blend-normal uppercase text-base md:text-2xl font-Bellefair">
              {selectedCrew?.role}
            </h2>
            <h1 className="text-center xl:text-start text-2xl md:text-4xl xl:text-6xl font-Bellefair text-tertiary uppercase ">
              {selectedCrew?.name}
            </h1>
          </div>

          <div>
            <p className="text-secondary xl:text-start text-center text-sm md:text-base xl:text-lg h-10 md:w-96 xl:w-auto md:h-28 w-80">
              {selectedCrew?.bio}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CrewComponent
