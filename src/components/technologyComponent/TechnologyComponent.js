import React, { useEffect, useState } from 'react'
import StepHeading from '../reuseableComponents/StepHeading'

import data from '../../data/data.json'
import useWindowSize from '../../customHooks/useWindoSize'

import TechnologyButtonNav from './TechnologyButtonNav'

const TechnologyComponent = () => {
  const { technology } = data

  const [selectedTechnology, setSelectedTechnology] = useState({})
  const [currentNav, setCurrent] = useState(0)

  const step = '03'
  const stepHeadingText = 'SPACE LAUNCH 101'
  const windoWidth = useWindowSize()

  const selectTechnologyHandler = (crewIndex) => {
    setSelectedTechnology(technology[crewIndex])
    setCurrent(crewIndex)
  }

  useEffect(() => {
    setSelectedTechnology(technology[0])
  }, [technology])

  return (
    <React.Fragment>
      <div className="flex justify-center items-center md:w-1/4 md:justify-around xl:ml-8">
        <StepHeading step={step} stepHeadingText={stepHeadingText} />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_2fr_2fr] mx-auto  mt-8 gap-y-8 xl:gap-y-0 xl:gap-x-10 xl:mx-0 place-items-center ">
        <div className="h-full xl:order-last xl:place-content-center">
          <img
            src={
              windoWidth.width > 1440
                ? selectedTechnology?.images?.portrait
                : selectedTechnology?.images?.landscape
            }
            alt={selectedTechnology?.images?.name}
            className={'w-screen h-[95%] xl:w-[32.88rem] xl:min-h-[32.938rem]'}
          />
        </div>

        <div>
          <div className="flex justify-center items-center xl:justify-between">
            <TechnologyButtonNav
              currentNav={currentNav}
              selectTechnologyHandler={selectTechnologyHandler}
            />
          </div>
        </div>

        <div className="flex flex-col mx-auto space-y-8 md:space-y-4 justify-center ">
          <div className="flex flex-col space-y-2">
            <h2 className="text-center xl:text-start text-tertiary/50 mix-blend-normal uppercase text-base  font-Bellefair">
              THE TERMINOLOGY…
            </h2>
            <h1 className="text-center xl:text-start text-2xl md:text-5xl xl:text-6xl font-Bellefair text-tertiary uppercase ">
              {selectedTechnology?.name}
            </h1>
          </div>

          <div>
            <p className="text-secondary xl:text-start text-center text-sm md:text-base xl:text-lg min-h-10 md:max-w-lg xl:w-auto md:min-h-28 max-w-md">
              {selectedTechnology?.description}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default TechnologyComponent
