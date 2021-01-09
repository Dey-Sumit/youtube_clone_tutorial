import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import { Container } from 'react-bootstrap'

import './_app.scss'
import HomeScreen from './screen/HomeScreen'
import SearchResultsScreen from './screen/SearchResultScreen'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import LoginScreen from './screen/loginScreen/LoginScreen'
import { useDispatch, useSelector } from 'react-redux'
import WatchScreen from './screen/watchScreen/WatchScreen'
import SubscriptionScreen from './screen/SubscriptionsScreen'
import ChannelScreen from './screen/channelScreen/ChannelScreen'

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
         <Route path='/search/:query'>
            <Layout>
               <SearchResultsScreen />
            </Layout>
         </Route>
         <Route path='/watch/:id'>
            <Layout>
               <WatchScreen />
            </Layout>
         </Route>
         <Route path='/subscriptions'>
            <Layout>
               <SubscriptionScreen />
            </Layout>
         </Route>
         <Route path='/channel/:channelId'>
            <Layout>
               <ChannelScreen />
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
