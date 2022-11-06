import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import NewTask from './NewTask';
import TaskListItem from './TaskListItem';

import PodcastsIcon from '@mui/icons-material/Podcasts';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import List from '@mui/material/List';


const PodcastDetails = () => {
    const [ podcast, setPodcast ] = useState(null);
    const [ tasks, setTasks ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const { id } = useParams();

    // capitalizes only first letter of word in string
    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
    
      // capitalizes first letter of *each* word in string
      const toTitleCase = (str) => {
        return str.replace(/\w\S*/g, function(txt){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    // mark a task as completed, then disables the button
    const completeTask = async task => {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        const body = { todo_status: "complete" }
        const options = {
            method: "PATCH",
            headers,
            body: JSON.stringify(body)
        }
        const resp = await fetch(`http://localhost:9292/tasks/${ task.id }`, options);
        const data = await resp.json();
    };

    // deletes a task completely
    const handleRemove = async id => {
        const resp = await fetch(`http://localhost:9292/tasks/${ id }`, { method: "DELETE" })
        const data = await resp.json();

        setTasks(tasks.filter( task => task.id != id))
    }

    useEffect(() => {
        async function fetchData() {
            const resp = await fetch(`http://localhost:9292/podcasts/${id}`)
            const data = await resp.json();
            setPodcast(data);
            setTasks(data.tasks)
            setLoading(false);
        }
        fetchData();
    }, [ podcast ])

    if(loading) {
        return <h1>Podcast Details Loading...</h1>
    } else {
  
    return (
    <div>
        <h1>Podcast Details</h1>
        <Container>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container justifyContent="center" rowSpacing={{ xs: 1, sm: 1, md: 2 }} sx={{ width: '100%' }}>
                <Grid item sx={{ width: '100%' }}>
                    <Card sx={{ display: 'flex', width: '100%'}}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: 212121 }} aria-label="recipe">
                                <PodcastsIcon />
                            </Avatar>
                        }
                        action={
                            <Button variant="contained" href={`/podcasts/${podcast.id}/edit`}>Edit Podcast</Button>
                        }
                        title={ `${toTitleCase( podcast.topic )}, featuring ${ toTitleCase( podcast.guest ) }` }
                        subheader={
                            `Expected Release Date : ${podcast.release_date}`
                        }
                        />
                        
                        <Typography variant="body2">
                            TASKS
                        </Typography>
                        { tasks.length == 0? 
                            <Typography variant="body2">
                                Currently no tasks available.
                            </Typography>
                             : <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
                             { tasks.map((todo, index) => (
                                 <TaskListItem 
                                     key={index} 
                                     task={todo}
                                     completeTask={completeTask} 
                                     handleRemove={handleRemove} 
                                 />
                             )
                             ) }
                             </List>    
                              }
                            <NewTask podcast={podcast} />
                        </CardContent>
                    </Box>
                    </Card>
                </Grid>
            </Grid>
        </Box>
        </Container>
    </div>
  )}
}

export default PodcastDetails
