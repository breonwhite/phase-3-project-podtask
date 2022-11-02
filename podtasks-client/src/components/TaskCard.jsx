import React from 'react'
import { Link } from 'react-router-dom'


const TaskCard = ({ task }) => {
  return (
    <li>
        Podcast: { task.podcast.topic }
        <br/>
        <Link to={`/tasks/${task.id}`}>
            { task.to_do }
        </Link>
    </li>
  )
}

export default TaskCard