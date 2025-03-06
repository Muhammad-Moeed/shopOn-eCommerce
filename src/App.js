import React from 'react'
import ResponsiveAppBar from './components/header'
import IndividualIntervalsExample from './components/banner'
import 'bootstrap/dist/css/bootstrap.min.css';





const App = () => {
  return (
    <>
      <ResponsiveAppBar />
      <IndividualIntervalsExample />
    </>
  )
}

export default App