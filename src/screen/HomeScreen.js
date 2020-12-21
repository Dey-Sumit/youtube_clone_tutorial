import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import CategoriesBar from '../components/categoriesBar/CategoriesBar'
import Video from '../components/video/Video'
import { getPopularVideos } from '../redux/actions/videos.action'

const HomeScreen = () => {
   const { accessToken } = useSelector(state => state.auth)
   const { videos } = useSelector(state => state.homeVideos)

   const dispatch = useDispatch()

   const history = useHistory()
   console.log(videos?.length)

   useEffect(() => {
      if (accessToken) dispatch(getPopularVideos())
   }, [history, dispatch, accessToken])

   // const nextPage = () => {
   //    console.log('next fired')
   //    if (activeCategory === 'All') {
   //       dispatch(getPopularVideos())
   //    } else {
   //       dispatch({
   //          type: SET_ACTIVE_CATEGORY,
   //          payload: activeCategory,
   //       })
   //       dispatch(getVideosByCategory(activeCategory))
   //    }
   // }

   return (
      <Container>
         <CategoriesBar />
         <Row>
            {videos
               ? videos?.map(video => (
                    <Col md={4} lg={3} key={video?.id?.videoId || video?.id}>
                       <Video video={video} />
                    </Col>
                 ))
               : [...Array(16)].map((_, i) => (
                    <Col md={4} lg={3} key={i}>
                       LOL
                    </Col>
                 ))}
         </Row>
      </Container>
   )
}

export default HomeScreen
