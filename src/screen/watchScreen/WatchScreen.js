import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Comments from '../../components/comments/Comments'
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'
import VideoMetaData from '../../components/VideoMetaData/VideoMetaData'

import './_watchScreen.scss'

const WatchScreen = () => {
   return (
      <Row>
         <Col lg={8}>
            {/* PLAYER */}
            <div className='watchScreen__player'>
               <iframe
                  src={`https://www.youtube.com/embed/123?controls=1`}
                  frameBorder='0'
                  allow='autoplay; encrypted-media'
                  allowFullScreen
                  title='my Video'
                  width='100%'
                  height='100%'
               />
            </div>

            {/* VIDEO METADATA */}
            <VideoMetaData />

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
