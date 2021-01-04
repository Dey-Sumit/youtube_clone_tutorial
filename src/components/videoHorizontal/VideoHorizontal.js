import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { AiFillEye } from 'react-icons/ai'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import numeral from 'numeral'
import moment from 'moment'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import request from '../../api'
import './_videoHorizontal.scss'

const VideoHorizontal = ({ video, searchScreen }) => {
   const {
      id,
      snippet: {
         channelId,
         channelTitle,
         description,
         title,
         publishedAt,
         thumbnails: { medium },
      },
   } = video

   const accessToken = useSelector(state => state.auth.accessToken)

   // const thumbnail =
   //    id.kind === 'youtube#channel' || channelScreen
   //       ? 'videoHorizon__thumbnail-channel'
   //       : 'videoHorizon__thumbnail-video'

   const history = useHistory()

   const [channelIcon, setChannelIcon] = useState(null)

   const [duration, setDuration] = useState(null)
   const [views, setViews] = useState(null)

   const seconds = moment.duration(duration).asSeconds()
   const _duration = moment.utc(seconds * 1000).format('mm:ss')

   const handleClick = () => {
      if (id.kind === 'youtube#channel') history.push(`/channel/${channelId}`)
      else history.push(`/watch/${id.videoId}`)
   }

   useEffect(() => {
      const get_channel_thumbnail = async () => {
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
      // if (showChannel)
      get_channel_thumbnail()
   }, [channelId, accessToken])

   useEffect(() => {
      const get_video_details = async () => {
         const {
            data: { items },
         } = await request('/videos', {
            params: {
               part: 'contentDetails,statistics',
               id: id.videoId,
            },
            headers: { Authorization: `Bearer ${accessToken}` },
         })
         setViews(items[0].statistics.viewCount)
         setDuration(items[0].contentDetails.duration)
      }
      // if (!channelScreen && id.kind !== 'youtube#channel') {
      get_video_details()
      // }
   }, [id, accessToken])

   const thumbnail =
      id.kind === 'youtube#channel' && 'videoHorizontal__thumbnail-channel'

   return (
      <Row
         className='py-2 m-1 videoHorizontal align-items-center'
         onClick={handleClick}>
         <Col
            xs={6}
            md={searchScreen ? 4 : 6}
            className='videoHorizontal__left'>
            <LazyLoadImage
               effect='blur'
               src={medium.url}
               className={`videoHorizontal__thumbnail ${thumbnail}`}
               wrapperClassName='videoHorizontal__thumbnail-wrapper'
            />
            {id.kind !== 'youtube#channel' && (
               <span className='videoHorizontal__duration'>{_duration}</span>
            )}
         </Col>

         <Col
            xs={6}
            md={searchScreen ? 8 : 6}
            className='p-0 videoHorizontal__right'>
            <p className='mb-1 videoHorizontal__title'>{title}</p>
            {id.kind !== 'youtube#channel' && (
               <div className='videoHorizontal__details'>
                  <AiFillEye className='mr-1' />
                  {numeral(views).format('0.a')} Views •
                  {moment(publishedAt).fromNow()}
               </div>
            )}

            {searchScreen && (
               <p className='mt-1 videoHorizontal__desc'>{description}</p>
            )}
            {id.kind !== 'youtube#channel' && (
               <div className='my-1 videoHorizontal__channel d-flex align-items-center'>
                  {searchScreen && (
                     <LazyLoadImage
                        src={channelIcon?.url}
                        alt=''
                        className='videoHorizon__channel-icon'
                     />
                  )}
                  <p className='mb-0'>{channelTitle}</p>
               </div>
            )}

            {/* <p className="mt-2">
                  5 videos
               </p> */}
         </Col>
      </Row>
   )
}

export default VideoHorizontal
