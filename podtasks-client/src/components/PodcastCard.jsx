import React from 'react'
import { Link } from 'react-router-dom'


const PodcastCard = ({ podcast }) => {
    const todoList = podcast.tasks

  return (
    <ul>
        <li>
        <Link to={`/podcasts/${podcast.id}`}>
            { podcast.topic }
        </Link>
        Description: { podcast.description } <br/>
        Guest Speaker: { podcast.guest } <br/>
        Expected Release Date: { podcast.release_date } <br/>
        Todos: { todoList.map((todo, index) => (
            <p key={index}>
                { todo.to_do } - { todo.todo_status }
            </p>
        )
        ) }
        </li>
    </ul>
  )
}

export default PodcastCard

