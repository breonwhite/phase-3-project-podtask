import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import NewTask from './NewTask';

const PodcastDetails = () => {
    const [ podcast, setPodcast ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const { id } = useParams();


    useEffect(() => {
        async function fetchData() {
            const resp = await fetch(`http://localhost:9292/podcasts/${id}`)
            const data = await resp.json();
            setPodcast(data);
            setLoading(false);
        }
        fetchData();
    }, [ podcast ])

    if(loading) {
        return <h1>Podcast Details Loading...</h1>
    } else {
  
    return (
    <div>
        <h1>Podcast Details</h1> <br/>
        <h1>{ podcast.topic }</h1>
        Description: { podcast.description } <br/>
        Guest Speaker: { podcast.guest } <br/>
        Expected Release Date: { podcast.release_date } <br/>
        Todos: { podcast.tasks.map((todo, index) => (
            <p key={index}>
                { todo.to_do } - { todo.todo_status }
            </p>
        )
        ) }<br/>
        <h1>Add a Task</h1><br />
        <NewTask podcast={podcast} />

    </div>
  )}
}

export default PodcastDetails