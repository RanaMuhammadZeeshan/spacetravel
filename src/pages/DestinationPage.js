import React from 'react'
import DestinationComponent from '../components/destinationComponent/DestinationComponent'

const DestinationPage = () => {
  return (
    <React.Fragment>
      <div>
        <section id="destination" className="max-w-[90%] mx-auto">
          <DestinationComponent />
        </section>
      </div>
    </React.Fragment>
  )
}

export default DestinationPage
