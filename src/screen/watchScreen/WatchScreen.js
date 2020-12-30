import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Comments from '../../components/comments/Comments'
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'
import VideoMetaData from '../../components/VideoMetaData/VideoMetaData'
import { getVideoById } from '../../redux/actions/videos.action'
import './_watchScreen.scss'

const WatchScreen = () => {
   const { id } = useParams()
   const dispatch = useDispatch()
   const { video, loading: videoLoading } = useSelector(
      state => state.selectedVideo
   )

   useEffect(() => {
      dispatch(getVideoById(id))
   }, [dispatch, id])

   return (
      <Row>
         <Col lg={8}>
            {/* PLAYER */}
            <div className='watchScreen__player'>
               <iframe
                  src={`https://www.youtube.com/embed/${id}?controls=1`}
                  frameBorder='0'
                  allow='autoplay; encrypted-media'
                  allowFullScreen
                  title={video?.snippet?.title}
                  width='100%'
                  height='100%'
               />
            </div>

            {/* VIDEO METADATA */}
            {!videoLoading ? (
               <VideoMetaData video={video} videoId={id} />
            ) : (
               <h5>Loading...</h5>
            )}

            {/* COMMENTS */}
            <Comments />
         </Col>
         <Col lg={4}>
            <h6 className='my-2'>Up Next</h6>
            {/* RELATED VIDEOS */}
            {[...Array(10)].map(() => (
               <VideoHorizontal />
            ))}
         </Col>
      </Row>
   )
}

export default WatchScreen
