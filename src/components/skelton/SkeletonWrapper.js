import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
const SkeletonWrapper = ({ style, count = 1, circle = false }) => {
   return (
      <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
         <Skeleton count={count} circle={circle} style={style} />
      </SkeletonTheme>
   )
}

export default SkeletonWrapper
