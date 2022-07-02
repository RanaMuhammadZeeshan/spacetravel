import React from 'react'

const DestinationNavButton = ({ selectDestinationHandler, currentNav }) => {
  return (
    <React.Fragment>
      <div className="flex space-x-6 justify-center items-center xl:justify-start">
        <button
          className={`${
            currentNav === 'Moon'
              ? 'text-tertiary border-b-tertiary/100'
              : 'text-secondary border-b-tertiary/0'
          } destinationNavButton`}
          onClick={() => selectDestinationHandler('Moon')}
        >
          Moon
        </button>
        <button
          className={`${
            currentNav === 'Mars'
              ? 'text-tertiary border-b-tertiary/100'
              : 'text-secondary border-b-tertiary/0'
          } destinationNavButton`}
          onClick={() => selectDestinationHandler('Mars')}
        >
          Mars
        </button>
        <button
          className={`${
            currentNav === 'Europa'
              ? 'text-tertiary border-b-tertiary/100'
              : 'text-secondary border-b-tertiary/0'
          } destinationNavButton`}
          onClick={() => selectDestinationHandler('Europa')}
        >
          Europa
        </button>
        <button
          className={`${
            currentNav === 'Titan'
              ? 'text-tertiary border-b-tertiary/100'
              : 'text-secondary border-b-tertiary/0'
          } destinationNavButton`}
          onClick={() => selectDestinationHandler('Titan')}
        >
          Titan
        </button>
      </div>
    </React.Fragment>
  )
}

export default DestinationNavButton
