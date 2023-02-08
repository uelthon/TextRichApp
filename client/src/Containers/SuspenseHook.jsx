import React, { Suspense } from 'react'
import Loader from '../Components/Loader'

const SuspenseHook = ({ component }) => {
  return (
    <Suspense fallback={<Loader height='50vh' />}>
      {component}
    </Suspense>
  )
}

export default SuspenseHook
