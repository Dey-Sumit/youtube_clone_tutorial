import React, { useState } from "react"
import { Container } from "react-bootstrap"
import "./_categoriesBar.scss"

const keywords = [
   "All",
   "React js",
   "Angular js",
   "React Native",
   "use of API",
   "Redux",
   "Music",
   "Algorithm Art ",
   "Guitar",
   "Bengali Songs",
   "Coding",
   "Cricket",
   "Football",
   "Real Madrid",
   "Gatsby",
   "Poor Coder",
   "Shwetabh",
]
const CategoriesBar = () => {
   const [active, setActive] = useState("All")
   const handleClick = value => {
      setActive(value)
   }
   return (
      <div className="categories ">
         {/* <section className="categories__section"> */}
         {keywords.map((value, i) => (
            <span
               key={i}
               className={value === active ? "active" : ""}
               onClick={() => handleClick(value)}>
               {value}
            </span>
         ))}
         {/* </section> */}
      </div>
   )
}

export default CategoriesBar
