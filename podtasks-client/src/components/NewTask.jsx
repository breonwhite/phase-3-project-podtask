import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

const NewTask = ({ podcast }) => {
    const [ task, setTask ] = useState("");
    const [loading, setLoading] = useState(true);
    const { podcastId } = useParams();

    const handleSubmit = async e => {
        e.preventDefault();
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        const body = { podcast_id: podcast.id, list_id: podcast.id, to_do: task, todo_status: "incomplete" }
        const options = {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        }
        await fetch('http://localhost:9292/tasks', options);
        setTask("")
        // redirect to Podcast List
        // navigate("/podcasts");
    }
  
    return (
    <div><h1>Create Task for { podcast.topic }</h1><br/>
    <form onSubmit={ handleSubmit }>
        <div>
            <label>Task:</label>
            <input type="text" value={ task } onChange={ e => setTask( e.target.value ) } autoFocus={ true } />
        </div>
        <br/>
        <div>
            <input type="submit" value="Add Task" />
        </div>
    </form>
    </div>
  )
}

export default NewTask