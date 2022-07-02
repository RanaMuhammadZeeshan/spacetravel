import React from 'react'

const StepHeading = ({ step, stepHeadingText }) => {
  return (
    <React.Fragment>
      <div className="flex space-x-6 justify-start items-center mt-16 xl:mt-20 xl:items-start">
        <h2 className="text-tertiary font-barlow font-bold text-base md:text-xl xl:text-3xl opacity-25">
          {step}
        </h2>
        <h2 className="text-tertiary font-barlow font-normal text-base md:text-xl xl:text-3xl uppercase">
          {stepHeadingText}
        </h2>
      </div>
    </React.Fragment>
  )
}

export default StepHeading
