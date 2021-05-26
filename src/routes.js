import React from 'react'
import { Route, Routes as ReactRoutes } from 'react-router-dom'
import Comments from './pages/Comments'
import About from './pages/About'
import MenuBar from './components/layout/MenuBar'
import Timeline from './pages/Timeline'

function Routes(props) {
  const {service} = props
  return (
            <ReactRoutes>
              <Route path="/" element={<MenuBar></MenuBar>}>
                <Route path="/" element={<About/>} />  
                <Route path="/comments" element={<Comments service={service}/>} />  
                <Route path="/timeline" element={<Timeline />} />  
              </Route> 
            </ReactRoutes>
  )
}

export default Routes
