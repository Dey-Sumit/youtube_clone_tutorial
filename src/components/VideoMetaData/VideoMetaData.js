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

const VideoMetaData = () => {
   // console.log(snippet);
   //    const { channelId, channelTitle, description, title, publishedAt } = snippet
   //    const { commentCount, dislikeCount, likeCount, viewCount } = statistics

   // const history = useHistory()
   //   const dispatch = useDispatch();
   //   const {
   //     channel: { snippet: channelSnippet, statistics: channelStatistics },
   //     subscriptionStatus,
   //   } = useSelector((state) => state.channelDetails);

   //   useEffect(() => {
   //     dispatch(getChannelDetails(channelId));
   //   }, [channelId, dispatch]);

   //   useEffect(() => {
   //     dispatch(checkSubscriptionStatus(channelId));
   //   }, [channelId, dispatch]);

   const handleLikeVideo = () => {
      // dispatch(rateVideo(videoId, "like"));
   }

   const handleDislikeVideo = () => {
      // dispatch(rateVideo(videoId, "dislike"));
   }

   return (
      <div className='videoMetaData py-2'>
         <div className='videoMetaData__top'>
            <h5>Video Title</h5>
            <div className='d-flex justify-content-between align-items-center py-1'>
               <span>
                  {numeral(10000).format('0.a')} views •{' '}
                  {moment('2020-08-05').fromNow()}
               </span>
               <div>
                  <span className='mr-3'>
                     <MdThumbUp size={26} onClick={handleLikeVideo} />{' '}
                     {numeral(10000).format('0.a')}
                  </span>
                  <span className='mr-3'>
                     <MdThumbDown size={26} onClick={handleDislikeVideo} />{' '}
                     {numeral(1000).format('0.a')}
                  </span>
               </div>
            </div>
         </div>
         <div className='videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3'>
            <div className='d-flex '>
               <img
                  src='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'
                  alt='channel icon'
                  className='rounded-circle mr-2'
               />
               <div className='d-flex flex-column'>
                  <span>Channel Name</span>
                  <span>{numeral(1300000).format('0.a')} Subscribers</span>
               </div>
            </div>

            <button className='btn border-0 p-2 m-2'>Subscribed</button>
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
               Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Incidunt exercitationem quaerat quia! Dolorum illum itaque et
               saepe facilis, cumque quas, doloremque deserunt vel mollitia rem,
               fugiat nesciunt! Nemo culpa molestias quo omnis animi iure et
               natus sequi temporibus officia! Minima fugiat rerum porro
               repudiandae nulla qui est, suscipit corporis quis. Lorem ipsum
               dolor sit, amet consectetur adipisicing elit. Incidunt
               exercitationem quaerat quia! Dolorum illum itaque et saepe
               facilis, cumque quas, doloremque deserunt vel mollitia rem,
               fugiat nesciunt! Nemo culpa molestias quo omnis animi iure et
               natus sequi temporibus officia! Minima fugiat rerum porro
               repudiandae nulla qui est, suscipit corporis quis.
            </ShowMoreText>
         </div>
      </div>
   )
}

export default VideoMetaData
