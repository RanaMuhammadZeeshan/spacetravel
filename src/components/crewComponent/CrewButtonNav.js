import React from 'react'

const CrewButtonNav = ({ currentNav, selectCrewHandler }) => {
  return (
    <React.Fragment>
      <div className="flex space-x-6 md:mt-9">
        <button
          className={`h-3 w-3 xl:h-4 xl:w-4 ${
            currentNav === 0 ? 'bg-tertiary' : 'bg-tertiary/50'
          } rounded-full crewNavButton`}
          onClick={() => selectCrewHandler(0)}
        ></button>
        <button
          className={`h-3 w-3 xl:h-4 xl:w-4 ${
            currentNav === 1 ? 'bg-tertiary' : 'bg-tertiary/50'
          } rounded-full crewNavButton`}
          onClick={() => selectCrewHandler(1)}
        ></button>
        <button
          className={`h-3 w-3 xl:h-4 xl:w-4 ${
            currentNav === 2 ? 'bg-tertiary' : 'bg-tertiary/50'
          } rounded-full crewNavButton`}
          onClick={() => selectCrewHandler(2)}
        ></button>
        <button
          className={`h-3 w-3 xl:h-4 xl:w-4 ${
            currentNav === 3 ? 'bg-tertiary' : 'bg-tertiary/50'
          } rounded-full crewNavButton`}
          onClick={() => selectCrewHandler(3)}
        ></button>
      </div>
    </React.Fragment>
  )
}

export default CrewButtonNav
