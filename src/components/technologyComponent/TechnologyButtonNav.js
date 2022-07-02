import React from 'react'

const TechnologyButtonNav = ({ currentNav, selectTechnologyHandler }) => {
  return (
    <React.Fragment>
      <div className="flex xl:flex-col xl:space-x-0 xl:space-y-5 xl:justify-evenly space-x-6 md:mt-9">
        <button
          className={`h-10 w-10 md:h-16 md:w-16  xl:h-20 xl:w-20 ${
            currentNav === 0
              ? 'bg-tertiary text-primary'
              : 'bg-tertiary/0 text-tertiary'
          } rounded-full crewNavButton  font-Bellefair text-base md:text-2xl xl:text-4xl border border-secondary/50`}
          onClick={() => selectTechnologyHandler(0)}
        >
          1
        </button>
        <button
          className={`h-10 w-10 md:h-16 md:w-16  xl:h-20 xl:w-20 ${
            currentNav === 1
              ? 'bg-tertiary text-primary'
              : 'bg-tertiary/0 text-tertiary'
          } rounded-full crewNavButton  font-Bellefair text-base md:text-2xl xl:text-4xl border border-secondary/50`}
          onClick={() => selectTechnologyHandler(1)}
        >
          2
        </button>
        <button
          className={`h-10 w-10 md:h-16 md:w-16  xl:h-20 xl:w-20 ${
            currentNav === 2
              ? 'bg-tertiary text-primary'
              : 'bg-tertiary/0 text-tertiary'
          } rounded-full crewNavButton  font-Bellefair text-base md:text-2xl xl:text-4xl border border-secondary/50`}
          onClick={() => selectTechnologyHandler(2)}
        >
          3
        </button>
      </div>
    </React.Fragment>
  )
}

export default TechnologyButtonNav
