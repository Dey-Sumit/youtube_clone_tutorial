import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import { Container } from 'react-bootstrap'

import './_app.scss'
import HomeScreen from './screen/HomeScreen'
import SearchResultsScreen from './screen/SearchResultScreen'
import { load_user } from './redux/actions/auth.action'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import LoginScreen from './screen/loginScreen/LoginScreen'
import { useDispatch, useSelector } from 'react-redux'

const Layout = ({ children }) => {
   const [sidebar, toggleSidebar] = useState(false)

   const handleToggleSidebar = () => toggleSidebar(value => !value)
   return (
      <>
         <Header handleToggleSidebar={handleToggleSidebar} />
         <div className='app__container '>
            <Sidebar sidebar={sidebar} closeSidebar={toggleSidebar} />
            <Container fluid className='app__main'>
               {children}
            </Container>
         </div>
      </>
   )
}

const App = () => {
   const dispatch = useDispatch()
   const history = useHistory()

   const accessToken = useSelector(state => state.auth.accessToken)
   const loading = useSelector(state => state.auth.loading)

   // useEffect(() => {
   //    dispatch(load_user())
   // }, [history, dispatch])

   useEffect(() => {
      if (!loading && !accessToken) {
         history.push('/auth')
      }
   }, [accessToken, history, loading])

   return (
      <Switch>
         <Route path='/' exact>
            <Layout>
               <HomeScreen />
            </Layout>
         </Route>
         <Route path='/search'>
            <Layout>
               <SearchResultsScreen />
            </Layout>
         </Route>
         <Route path='/auth'>
            <LoginScreen />
         </Route>
         <Route>
            <Redirect to='/' />
         </Route>
      </Switch>
   )
}

export default App
