import React, { useState } from 'react'

import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'
import './_header.scss'
import { useHistory } from 'react-router-dom'

const Header = ({ handleToggleSidebar }) => {
   const [input, setInput] = useState('')

   const history = useHistory()

   const handleSearch = e => {
      e.preventDefault()
      history.push(`/search/${input}`)
   }

   return (
      <div className='header'>
         <FaBars
            size={26}
            className='header__menu'
            onClick={() => handleToggleSidebar()}
         />
         <img
            src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
            alt='yt logo'
            className='header__logo'
         />

         <form onSubmit={handleSearch}>
            <input
               type='text'
               placeholder='Search'
               value={input}
               onChange={e => setInput(e.target.value)}
            />
            <button type='submit'>
               <AiOutlineSearch size={22} />
            </button>
         </form>

         <div className='header__icons'>
            <MdNotifications size={28} />
            <MdApps size={28} />
            <img
               src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
               alt='avatar'
               className='fluid'
            />
         </div>
      </div>
   )
}

export default Header
