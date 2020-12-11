import React from "react"
import { Container } from "react-bootstrap"
import VideoHorizontal from "../components/videoHorizontal/VideoHorizontal"

const SearchResultsScreen = () => {
   return (
      <Container>
         {[...new Array(16)].map(() => (
            <VideoHorizontal />
         ))}
      </Container>
   )
}

export default SearchResultsScreen
