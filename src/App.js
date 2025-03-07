import React from 'react'
import ResponsiveAppBar from './components/header'
import IndividualIntervalsExample from './components/banner'
import 'bootstrap/dist/css/bootstrap.min.css';
import ShapeExample from './components/category';
import './App.css'

const App = () => {
  return (
    <>
      <ResponsiveAppBar />
      <IndividualIntervalsExample />
      <ShapeExample />
    </>
  )
}

export default App