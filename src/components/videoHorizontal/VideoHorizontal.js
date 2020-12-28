import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { AiFillEye } from 'react-icons/ai'
import './_videoHorizontal.scss'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import numeral from 'numeral'
import moment from 'moment'

const VideoHorizontal = () => {
   return (
      <Row className='videoHorizontal m-1 py-2 align-items-center'>
         <Col xs={6} md={4} className='videoHorizontal__left'>
            {/* <img
               src='https://images.pexels.com/photos/3520942/pexels-photo-3520942.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
               alt='img'
               className={`videoHorizontal__thumbnail`}
            /> */}
            <LazyLoadImage
               effect='blur'
               src='https://images.pexels.com/photos/3520942/pexels-photo-3520942.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
               className={`videoHorizontal__thumbnail`}
               wrapperClassName='videoHorizontal__thumbnail-wrapper'
            />

            <span className='videoHorizontal__duration'>05:54</span>
         </Col>

         <Col xs={6} md={8} className='videoHorizontal__right p-0'>
            <p className='videoHorizontal__title mb-1'>
               Be a full stack web developer in 1 month
            </p>

            <div className='videoHorizontal__details'>
               <AiFillEye className='mr-1' />
               {numeral(127000).format('0.a')} Views •{' '}
               {moment('2020-06-05').fromNow()}
            </div>

            {/* <p className='videoHorizontal__desc mt-1'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Accusantium, repellendus.{' '}
            </p> */}
            <div className='videoHorizontal__channel d-flex align-items-center my-1'>
               {/*    <LazyLoadImage
                  src='https://images.pexels.com/photos/3520942/pexels-photo-3520942.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                  alt=''
               /> */}
               <p>Backbench Coder</p>
            </div>

            {/* <p className="mt-2">
                  5 videos
               </p> */}
         </Col>
      </Row>
   )
}

export default VideoHorizontal
