import React from 'react'
import moment from 'moment'

import './_comment.scss'

const Comment = () => {
   return (
      <div className='comment p-2 d-flex '>
         <img
            src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
            alt='name'
            className='rounded-circle mr-3'
         />
         <div className='comment__body'>
            <p className='comment__header'>
               Sumit Dey • {moment('2020-08-06').fromNow()}
            </p>
            <p>Nice Video Dude!!!</p>
         </div>
      </div>
   )
}

export default Comment
