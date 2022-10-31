import React from 'react'
import { Link } from 'react-router-dom'


const PodcastCard = ({ podcast }) => {
  return (
    <li>
        <Link to={`/podcasts/${podcast.id}`}>
            { podcast.topic }
        </Link>
    </li>
  )
}

export default PodcastCard