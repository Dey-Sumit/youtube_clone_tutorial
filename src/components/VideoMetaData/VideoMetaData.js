import React, { useEffect } from 'react'

import numeral from 'numeral'
import moment from 'moment'
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import ShowMoreText from 'react-show-more-text'

import './_videoMetaData.scss'
// import { useDispatch, useSelector } from "react-redux";

// import { getChannelDetails } from "../../redux/actions/channel.action";
// import { rateVideo } from "../../redux/actions/videos.action";
// import { checkSubscriptionStatus } from "../../redux/actions/channel.action";
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
   checkSubscriptionStatus,
   getChannelDetails,
} from '../../redux/actions/channel.action'
import HelmetCustom from '../HelmetCustom'

const VideoMetaData = ({ video: { snippet, statistics }, videoId }) => {
   // console.log(snippet);
   const { channelId, channelTitle, description, title, publishedAt } = snippet
   const { commentCount, dislikeCount, likeCount, viewCount } = statistics

   // const history = useHistory()
   const dispatch = useDispatch()
   const {
      channel: { snippet: channelSnippet, statistics: channelStatistics },
      subscriptionStatus,
   } = useSelector(state => state.channelDetails)

   useEffect(() => {
      dispatch(getChannelDetails(channelId))
   }, [channelId, dispatch])

   useEffect(() => {
      dispatch(checkSubscriptionStatus(channelId))
   }, [channelId, dispatch])

   function handleLikeVideo() {
      // dispatch(rateVideo(videoId, "like"));
   }

   const handleDislikeVideo = () => {
      // dispatch(rateVideo(videoId, "dislike"));
   }

   return (
      <div className='py-2 videoMetaData'>
         <HelmetCustom title={title} description={description} />

         <div className='videoMetaData__top'>
            <h5>{title}</h5>
            <div className='py-1 d-flex justify-content-between align-items-center'>
               <span>
                  {numeral(viewCount).format('0.a')} views •{' '}
                  {moment(publishedAt).fromNow()}
               </span>
               <div>
                  <span className='mr-3'>
                     <MdThumbUp size={26} onClick={handleLikeVideo} />{' '}
                     {numeral(likeCount).format('0.a')}
                  </span>
                  <span className='mr-3'>
                     <MdThumbDown size={26} onClick={handleDislikeVideo} />{' '}
                     {numeral(dislikeCount).format('0.a')}
                  </span>
               </div>
            </div>
         </div>
         <div className='py-3 my-2 videoMetaData__channel d-flex justify-content-between align-items-center'>
            <div className='d-flex '>
               <img
                  src={channelSnippet?.thumbnails?.default?.url}
                  alt='channel icon'
                  className='mr-2 rounded-circle'
               />
               <div className='d-flex flex-column'>
                  <span>{channelTitle}</span>
                  <span>
                     {numeral(channelStatistics?.subscriberCount).format('0.a')}{' '}
                     Subscribers
                  </span>
               </div>
            </div>

            <button
               className={`btn border-0 p-2 m-2 ${
                  subscriptionStatus && 'button-gray'
               }`}>
               {subscriptionStatus ? 'Subscribed' : 'Subscribe'}
            </button>
         </div>
         <div className='videoMetaData__description'>
            <ShowMoreText
               lines={3}
               more='SHOW MORE'
               less='SHOW LESS'
               anchorClass='showMoreText'
               onClick={() => {}}
               expanded={false}
               width={280}>
               {description}
            </ShowMoreText>
         </div>
      </div>
   )
}

export default VideoMetaData
