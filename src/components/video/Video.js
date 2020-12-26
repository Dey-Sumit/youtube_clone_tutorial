import React, { useEffect, useState } from 'react'
import { AiFillEye } from 'react-icons/ai'
import numeral from 'numeral'
import moment from 'moment'
import request from '../../api'

import { LazyLoadImage } from 'react-lazy-load-image-component'

import './_video.scss'
import { useSelector } from 'react-redux'

const Video = ({ video }) => {
   const {
      id,
      snippet: {
         channelId,
         channelTitle,
         title,
         publishedAt,
         thumbnails: { medium },
      },
      contentDetails,
   } = video
   const accessToken = useSelector(state => state.auth.accessToken)
   const [channelIcon, setChannelIcon] = useState(null)

   useEffect(() => {
      // get the channel thumbnail
      const get_channel_icon = async () => {
         const {
            data: { items },
         } = await request('/channels', {
            params: {
               part: 'snippet',
               id: channelId,
            },
            headers: { Authorization: `Bearer ${accessToken}` },
         })
         setChannelIcon(items[0].snippet.thumbnails.default)
      }
      get_channel_icon()
   }, [channelId, accessToken])

   return (
      <div className='video'>
         <div className='video__top'>
            <LazyLoadImage effect='blur' src={medium.url} />
            <span className='video__duration'>05:24</span>
         </div>
         <p className='video__title'>{title}</p>
         <div className='video__details'>
            <span>
               <AiFillEye /> {numeral(127000).format('0.a')} Views •{' '}
            </span>

            <span className='px-2'> {moment(publishedAt).fromNow()}</span>
         </div>
         <div className='video__channel'>
            <LazyLoadImage effect='blur' src={channelIcon?.url} />

            <p>{channelTitle}</p>
         </div>
      </div>
   )
}

export default Video
