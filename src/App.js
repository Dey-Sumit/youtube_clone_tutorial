import React, { useState } from "react"
import Header from "./components/header/Header"
import Sidebar from "./components/sidebar/Sidebar"
import { Container } from "react-bootstrap"

import "./_app.scss"
import HomeScreen from "./screen/HomeScreen"
import SearchResultsScreen from "./screen/SearchResultScreen"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const App = () => {
   // toggleShowSidebar={toggleShowSidebar}

   const [sidebar, toggleSidebar] = useState(false)

   const handleToggleSidebar = () => toggleSidebar(value => !value)
   return (
      <Router>
         <Header handleToggleSidebar={handleToggleSidebar} />
         <div className="app__container ">
            <Sidebar sidebar={sidebar} closeSidebar={toggleSidebar} />
            <Container fluid className="app__main">
               <Switch>
                  <Route path="/" exact component={HomeScreen} />
                  <Route path="/search" exact component={SearchResultsScreen} />
               </Switch>
            </Container>
         </div>
      </Router>
   )
}

export default App
