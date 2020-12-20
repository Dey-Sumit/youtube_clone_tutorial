import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import CategoriesBar from '../components/categoriesBar/CategoriesBar'
import Video from '../components/video/Video'
import { getHomeVideos } from '../redux/actions/videos.action'
const HomeScreen = () => {
   const { accessToken } = useSelector(state => state.auth)
   const { videos, activeCategory } = useSelector(state => state.homeVideos)

   const dispatch = useDispatch()

   const history = useHistory()

   useEffect(() => {
      if (accessToken) dispatch(getHomeVideos())
   }, [history, dispatch, accessToken])

   // const nextPage = () => {
   //    if (activeCategory === 'All') {
   //       dispatch(getHomeVideos())
   //    } else {
   //       dispatch({
   //          type: SET_ACTIVE_CATEGORY,
   //          payload: activeCategory,
   //       })
   //       dispatch(fetchCategoriesVideos(activeCategory))
   //    }
   // }

   return (
      <Container>
         <CategoriesBar />

         <Row>
            {videos.length > 0 &&
               videos.map(video => (
                  <Col md={4} lg={3} key={video?.id}>
                     <Video video={video} />
                  </Col>
               ))}
         </Row>
      </Container>
   )
}

export default HomeScreen
