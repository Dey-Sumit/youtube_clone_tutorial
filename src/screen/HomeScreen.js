import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import InfiniteScroll from 'react-infinite-scroll-component'
// import Skeleton from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import CategoriesBar from '../components/categoriesBar/CategoriesBar'
import HelmetCustom from '../components/HelmetCustom'
import SkeletonVideo from '../components/skelton/SkeletonVideo'
// import SkeletonWrapper from '../components/skelton/SkeletonWrapper'
import Video from '../components/video/Video'
import {
   getPopularVideos,
   getVideosByCategory,
} from '../redux/actions/videos.action'

const HomeScreen = () => {
   const { accessToken } = useSelector(state => state.auth)
   const { videos, activeCategory, loading } = useSelector(
      state => state.homeVideos
   )

   const dispatch = useDispatch()

   const history = useHistory()
   console.log(videos?.length)

   useEffect(() => {
      if (accessToken) dispatch(getPopularVideos())
   }, [history, dispatch, accessToken])
   // const [items, setItems] = useState([...Array(30)])

   // const fetchData = () => {
   //    setTimeout(() => {
   //       setItems([...items, ...Array(20)])
   //    }, 2000)
   // }

   const nextPage = () => {
      if (activeCategory === 'All') {
         dispatch(getPopularVideos())
      } else {
         dispatch(getVideosByCategory(activeCategory))
      }
   }

   return (
      <Container>
         <HelmetCustom />

         <CategoriesBar />
         <InfiniteScroll
            dataLength={videos.length} //This is important field to render the next data
            next={nextPage}
            hasMore={true}
            loader={
               <div className='mx-auto spinner-border text-danger d-block' />
            }
            className='row'
            endMessage={
               <p style={{ textAlign: 'center' }}>
                  <b>Yay! You have seen it all</b>
               </p>
            }>
            {!loading
               ? videos.map(video => (
                    <Col md={4} lg={3}>
                       <Video video={video} />
                    </Col>
                 ))
               : [...Array(20)].map((_, i) => (
                    <Col md={4} lg={3} key={i}>
                       <SkeletonVideo />
                    </Col>
                 ))}
         </InfiniteScroll>
      </Container>
   )
}

export default HomeScreen
