import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import VideoHorizontal from '../components/videoHorizontal/VideoHorizontal'
import { getSubscriptionsVideos } from '../redux/actions/channel.action'

const SubscriptionScreen = () => {
   const dispatch = useDispatch()
   const { loading, videos } = useSelector(state => state.subscriptionsVideos)

   useEffect(() => {
      dispatch(getSubscriptionsVideos())
   }, [dispatch])

   return (
      <Container fluid>
         {!loading ? (
            videos.map(video => (
               <VideoHorizontal video={video} key={video.id} channelScreen />
            ))
         ) : (
            <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
               <Skeleton width='100%' height='130px' count={20} />
            </SkeletonTheme>
         )}
      </Container>
   )
}

export default SubscriptionScreen
