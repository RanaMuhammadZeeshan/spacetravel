import React, { useEffect, useState } from 'react'
import StepHeading from '../reuseableComponents/StepHeading'

import DestinationNavButton from './DestinationNavButton'

import data from '../../data/data.json'
import useDetectSafari from '../../customHooks/useDetectSafari'

const DestinationComponent = () => {
  const { destinations } = data

  const [selectedDestination, setSelectedDestination] = useState({})
  const [currentNav, setCurrent] = useState('Moon')

  const safariAgent = useDetectSafari()

  const step = '01'
  const stepHeadingText = 'Pick your destination'

  const selectDestinationHandler = (destination) => {
    const tempDestinations = destinations

    tempDestinations.map(
      (dest) => destination === dest.name && setSelectedDestination(dest)
    )

    setCurrent(destination)
  }

  useEffect(() => {
    setSelectedDestination(destinations[0])
  }, [destinations])

  return (
    <React.Fragment>
      {/* Heading */}
      <div className="stepHeadingContainer">
        <StepHeading step={step} stepHeadingText={stepHeadingText} />
      </div>
      {/* Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 max-w-[70%] mx-auto xl:max-w-[90%]  place-content-center mt-6 xl:mt-32 gap-y-7 xl:gap-y-0 xl:gap-x-12">
        {/* Destination Image */}
        <div>
          <img
            src={
              safariAgent
                ? selectedDestination?.images?.png
                : selectedDestination?.images?.webp
            }
            alt={selectedDestination && selectedDestination.name}
            className="w-44 h-44 md:w-72 md:h-72 xl:w-[27.813rem] xl:min-h-[27.813rem] mx-auto"
          />
        </div>

        {/* Destination Details */}
        <div className="space-y-3">
          {/* Content Nav */}
          <DestinationNavButton
            selectDestinationHandler={selectDestinationHandler}
            currentNav={currentNav}
          />

          {/* Destination Place Name */}

          <div className="flex justify-center items-center xl:justify-start">
            <h1 className="text-tertiary font-Bellefair font-normal text-6xl md:text-[5rem] uppercase">
              {selectedDestination && selectedDestination.name}
            </h1>
          </div>

          {/* Destination Description */}

          <p className="text-secondary text-center xl:text-start  text-base font-barlow border-b border-b-secondary/70 py-5 h-48 md:h-32 xl:h-28">
            {selectedDestination && selectedDestination.description}
          </p>

          {/* Destination Details */}
          <div className="flex flex-col md:flex-row text-white mx-auto justify-evenly xl:justify-start  items-center space-y-2 md:space-y-0 xl:space-x-16">
            {/* Destination Content */}

            <div className="flex flex-col space-y-2">
              <h3 className="destinationContentHeading">AVG. DISTANCE</h3>
              <h2 className="destinationContentDescription ">
                {selectedDestination?.distance}
              </h2>
            </div>

            <div className="flex flex-col space-y-2">
              <h3 className="destinationContentHeading">Est. travel time</h3>
              <h2 className="destinationContentDescription">
                {selectedDestination?.travel}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default DestinationComponent
