import React from "react"
import "./_sidebar.scss"

import {
   MdSubscriptions,
   MdExitToApp,
   MdThumbUp,
   MdHistory,
   MdLibraryBooks,
   MdHome,
   MdSentimentDissatisfied,
} from "react-icons/md"

const Sidebar = ({ sidebar, closeSidebar }) => {
   return (
      <div
         className={sidebar ? "sidebar open" : "sidebar"}
         onClick={() => closeSidebar(false)}>
         <nav>
            <MdHome size={23} />
            <span>Home</span>
         </nav>

         <nav>
            <MdSubscriptions size={23} />
            <span>Subscriptions</span>
         </nav>

         <nav>
            <MdThumbUp size={23} />
            <span>Home</span>
         </nav>

         <nav>
            <MdHistory size={23} />
            <span>History</span>
         </nav>
         <nav>
            <MdLibraryBooks size={23} />
            <span>Library</span>
         </nav>
         <nav>
            <MdSentimentDissatisfied size={23} />
            <span>I don't Know</span>
         </nav>

         <hr />

         <nav>
            <MdExitToApp size={23} />
            <span>Log Out</span>
         </nav>

         <hr />
      </div>
   )
}

export default Sidebar
