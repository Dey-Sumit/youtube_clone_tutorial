import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Comments from '../../components/comments/Comments'
import HelmetCustom from '../../components/HelmetCustom'
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'
import VideoMetaData from '../../components/VideoMetaData/VideoMetaData'
import {
   getRelatedVideos,
   getVideoById,
} from '../../redux/actions/videos.action'
import './_watchScreen.scss'

const WatchScreen = () => {
   const { id } = useParams()
   const dispatch = useDispatch()
   const { video, loading: videoLoading } = useSelector(
      state => state.selectedVideo
   )
   const { videos, loading } = useSelector(state => state.relatedVideos)
   useEffect(() => {
      dispatch(getVideoById(id))
      dispatch(getRelatedVideos(id))
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
            <Comments
               videoId={id}
               totalComments={video?.statistics?.commentCount}
            />
         </Col>
         <Col lg={4}>
            <h6 className='my-2'>Up Next</h6>
            {/* RELATED VIDEOS */}
            {!loading && videos.length > 0 ? (
               videos
                  .filter(video => video.snippet)
                  .map(video => (
                     <VideoHorizontal
                        video={video}
                        key={video.id.videoId}
                        // showDescription={false}
                     />
                  ))
            ) : (
               <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                  <Skeleton width='100%' height='130px' count={15} />
               </SkeletonTheme>
            )}
         </Col>
      </Row>
   )
}

export default WatchScreen
