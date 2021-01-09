import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Video from '../../components/video/Video'

import { getVideoByChannel } from '../../redux/actions/videos.action'

import numeral from 'numeral'

import './channelScreen.scss'
import Skeleton from 'react-loading-skeleton'
import { getChannelDetails } from '../../redux/actions/channel.action'

const ChannelScreen = () => {
   const { channelId } = useParams()

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getChannelDetails(channelId))
      dispatch(getVideoByChannel(channelId))
   }, [dispatch, channelId])

   const { snippet, statistics } = useSelector(
      state => state.channelDetails.channel
   )
   const { videos, loading } = useSelector(state => state.channelVideos)

   //TODO change to helmet
   useEffect(() => {
      document.title = snippet?.title
   }, [snippet])

   return (
      <>
         <div className='px-5 py-2 my-2 d-flex justify-content-between align-items-center channelHeader'>
            <div className='d-flex align-items-center'>
               <img src={snippet?.thumbnails?.default?.url} alt='' />

               <div className='ml-3 channelHeader__details'>
                  <h3>{snippet?.title}</h3>
                  <span>
                     {numeral(statistics?.subscriberCount).format('0.a')}{' '}
                     subscribers
                  </span>
               </div>
            </div>

            <button>Subscribe</button>
         </div>

         <Container>
            <Row className='mt-2'>
               {!loading
                  ? videos.map(video => (
                       <Col md={4} lg={3} key={video.etag}>
                          <Video video={video} channelScreen />
                       </Col>
                    ))
                  : [...Array(15)].map(() => (
                       <Col md={4} lg={3}>
                          <Skeleton
                             width='100%'
                             height='200px'
                             style={{ margin: '0.5rem' }}
                             count={15}
                          />
                       </Col>
                    ))}
            </Row>
         </Container>
      </>
   )
}

export default ChannelScreen
