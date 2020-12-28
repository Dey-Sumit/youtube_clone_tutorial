import React, { useState } from 'react'
import Comment from '../comment/Comment'
// import { useDispatch } from 'react-redux'
import './_comments.scss'

const Comments = ({ comments }) => {
   // const dispatch = useDispatch();
   const [input, setInput] = useState('')

   //    const rawComments = comments?.map(
   //       comment => comment.snippet.topLevelComment.snippet
   //    )
   const handleComment = e => {
      e.preventDefault()
      if (input.length === 0) return

      // dispatch(addComment(id, input));
      setInput('')
   }

   return (
      <div className='comments'>
         <p>12389 Comments</p>
         <div className='comments__input my-2 d-flex w-100'>
            <img
               src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
               alt='avatar'
               className='rounded-circle mr-4'
            />
            <form onSubmit={handleComment} className='d-flex flex-grow-1'>
               <input
                  type='text'
                  placeholder='write a comment'
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  className='flex-grow-1'
               />
               <button type='submit' className='border-0 p-2 '>
                  Comment
               </button>
            </form>
         </div>

         <div className='comments__list'>
            {[...Array(10)].map((comment, i) => (
               <Comment />
            ))}
         </div>
      </div>
   )
}

export default Comments
