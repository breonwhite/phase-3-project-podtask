import React, { useEffect, useState } from 'react';
import TaskCard from './TaskCard'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';



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

    const deleteTask = async id => {
        const resp = await fetch(`http://localhost:9292/tasks/${ id }`, { method: "DELETE" })
        const data = await resp.json();

        setTasks(tasks.filter( task => task.id != id))
    }

    const taskCards = tasks.map((task, index) => <TaskCard key={ index } task={ task } deleteTask={ deleteTask }/>)

    if (tasks.length == 0) {
        return (<h1>Currently No Tasks</h1>)
    } else {
    return (
        <div>
            <h1>Task Overview</h1>
        <Container>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container justifyContent="center" rowSpacing={{ xs: 1, sm: 1, md: 2 }} sx={{ width: '100%' }}>
                { taskCards }
            </Grid>
        </Box>
        </Container>
        </div>
  )
    }
}

export default TaskList