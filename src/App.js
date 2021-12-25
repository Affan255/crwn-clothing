import React from 'react'
import './App.css'
import HomePage from './pages/homepage/homepage.component'
import { Route } from 'react-router-dom'

const Hats = () => {
  return <h1>HATS PAGE</h1>
}

function App() {

 return(
   <div>
     <Route exact path="/" component={HomePage} />
     <Route exact path="/hats" component={Hats} />
   </div>
 ) 
 
}

export default App
