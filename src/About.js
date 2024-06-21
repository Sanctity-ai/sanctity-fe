import React, { Suspense } from 'react'

const Spline = React.lazy(() => import('@splinetool/react-spline'))

export function About() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/OW2h22J6pKyy4tz0/scene.splinecode" />
      </Suspense>
    </div>
  )
}

export default About
