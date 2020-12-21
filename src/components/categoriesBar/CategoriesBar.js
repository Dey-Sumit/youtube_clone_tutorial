import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {
   getVideosByCategory,
   getPopularVideos,
} from '../../redux/actions/videos.action'
import { SET_ACTIVE_CATEGORY } from '../../redux/actionTypes'
import './_categoriesBar.scss'

const keywords = [
   'All',
   'React js',
   'Angular js',
   'React Native',
   'use of API',
   'Redux',
   'Music',
   'Algorithm Art ',
   'Guitar',
   'Bengali Songs',
   'Coding',
   'Cricket',
   'Football',
   'Real Madrid',
   'Gatsby',
   'Poor Coder',
   'Shwetabh',
]
const CategoriesBar = () => {
   const [active, setActive] = useState('All')

   const dispatch = useDispatch()

   const handleClick = value => {
      // dispatch({
      //    type: SET_ACTIVE_CATEGORY,
      //    payload: value,
      // })
      setActive(value)
      if (value === 'All') dispatch(getPopularVideos())
      else dispatch(getVideosByCategory(value))
   }
   return (
      <div className='categories '>
         {/* <section className="categories__section"> */}
         {keywords.map((value, i) => (
            <span
               key={i}
               className={value === active ? 'active' : ''}
               onClick={() => handleClick(value)}>
               {value}
            </span>
         ))}
         {/* </section> */}
      </div>
   )
}

export default CategoriesBar
