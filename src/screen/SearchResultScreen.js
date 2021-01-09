import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import VideoHorizontal from '../components/videoHorizontal/VideoHorizontal'
import { searchVideos } from '../redux/actions/videos.action'

const SearchResultsScreen = () => {
   const { query } = useParams()

   const dispatch = useDispatch()

   const { videos, loading } = useSelector(state => state.searchedVideos)

   // const [page, setPage] = useState(1)

   useEffect(() => {
      dispatch(searchVideos(query))
   }, [query, dispatch])

   return (
      <Container>
         {!loading ? (
            videos?.map(video => (
               <VideoHorizontal
                  video={video}
                  searchScreen
                  key={video.id.channelId || video.id.videoId}
               />
            ))
         ) : (
            <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
               <Skeleton width='100%' height='130px' count={20} />
            </SkeletonTheme>
         )}
      </Container>
   )
}

export default SearchResultsScreen
