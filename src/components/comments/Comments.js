import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
   addComment,
   getCommentsOfVideoById,
} from '../../redux/actions/comments.action'
import Comment from '../comment/Comment'
import './_comments.scss'

const Comments = ({ videoId, totalComments }) => {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getCommentsOfVideoById(videoId))
   }, [dispatch, videoId])

   const comments = useSelector(state => state.comments.comments)
   const [input, setInput] = useState('')

   const rawComments = comments?.map(
      comment => comment.snippet.topLevelComment.snippet
   )
   const handleComment = e => {
      e.preventDefault()
      if (input.length === 0) return

      dispatch(addComment(videoId, input))
      setInput('')
   }

   return (
      <div className='comments'>
         <p>{totalComments} Comments</p>
         <div className='my-2 comments__input d-flex w-100'>
            <img
               src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
               alt='avatar'
               className='mr-4 rounded-circle'
            />
            <form onSubmit={handleComment} className='d-flex flex-grow-1'>
               <input
                  type='text'
                  placeholder='write a comment'
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  className='flex-grow-1'
               />
               <button type='submit' className='p-2 border-0 '>
                  Comment
               </button>
            </form>
         </div>

         <div className='comments__list'>
            {rawComments?.map((comment, i) => (
               <Comment comment={comment} key={i} />
            ))}
         </div>
      </div>
   )
}

export default Comments
