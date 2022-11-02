import React, { useEffect, useState } from 'react';
import TaskCard from './TaskCard'

const TaskList = () => {
    const [ tasks, setTasks ] = useState([])
    
    useEffect(() => {
        async function fetchData() {
            const resp = await fetch('http://localhost:9292/tasks')
            const data = await resp.json();
            setTasks(data);
        }
        fetchData();
    }, [])

    const taskCards = tasks.map((task, index) => <TaskCard key={ index } task={ task } />)
  
    return (
    <div>
        Task List
        { taskCards }
    </div>
    
  )
}

export default TaskList