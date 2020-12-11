import React from "react"
import { Col, Row } from "react-bootstrap"
import { AiFillEye } from "react-icons/ai"
import "./_videoHorizontal.scss"
import { LazyLoadImage } from "react-lazy-load-image-component"

const VideoHorizontal = () => {
   return (
      <Row className="videoHorizontal">
         <Col xs={6} md={4} className="videoHorizontal__left">
            <img
               src="https://images.pexels.com/photos/3520942/pexels-photo-3520942.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
               alt="img"
               className={`videoHorizontal__thumbnail`}
            />
            {/* <LazyLoadImage
               effect="blur"
               src="https://images.pexels.com/photos/3520942/pexels-photo-3520942.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
               className={`videoHorizontal__thumbnail`}
               wrapperClassName="videoHorizontal__thumbnail-wrapper"
            /> */}

            <span className="videoHorizontal__duration">05:54</span>
         </Col>

         <Col xs={6} md={8} className="videoHorizontal__right">
            <p className="videoHorizontal__title">
               Be a full stack web developer in 1 month
            </p>

            <div className="videoHorizontal__details">
               <span>
                  <AiFillEye className="mr-1" />
                  4m views •
               </span>
               <span className="ml-2">a day ago</span>
            </div>

            <p className="videoHorizontal__desc">
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Accusantium, repellendus.{" "}
            </p>
            <div className="videoHorizontal__channel">
               <img
                  src="https://images.pexels.com/photos/3520942/pexels-photo-3520942.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
               />
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
