import React from "react"
import { AiFillEye } from "react-icons/ai"
import "./_video.scss"

const Video = () => {
   return (
      <div className="video">
         <div className="video__top">
            <img
               src="https://images.pexels.com/photos/3520942/pexels-photo-3520942.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
               alt="img"
               className="fluid"
            />
            <span className="video__duration">05:24</span>
         </div>
         <p className="video__title">
            Master Java in 3 minutes,no joking;seriously{" "}
         </p>
         <div className="video__details">
            <span>
               <AiFillEye /> 5m Views •{" "}
            </span>

            <span className="px-2"> a day ago</span>
         </div>
         <div className="video__channel">
            <img
               src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
               alt="channel Icons"
            />
            <p>Backbench Coder</p>
         </div>
      </div>
   )
}

export default Video
