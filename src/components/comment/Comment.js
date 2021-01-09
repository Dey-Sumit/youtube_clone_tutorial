import React from 'react'
import moment from 'moment'

import './_comment.scss'

const Comment = ({
   comment: {
      authorDisplayName,
      authorProfileImageUrl,
      publishedAt,
      textDisplay,
   },
}) => {
   return (
      <div className='p-2 comment d-flex '>
         <img
            src={authorProfileImageUrl}
            alt='name'
            className='mr-3 rounded-circle'
         />
         <div className='comment__body'>
            <p className='comment__header'>
               {authorDisplayName} • {moment(publishedAt).fromNow()}
            </p>
            <p>{textDisplay}</p>
         </div>
      </div>
   )
}

export default Comment
