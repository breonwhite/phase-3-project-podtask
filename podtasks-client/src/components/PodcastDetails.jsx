import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import NewTask from './NewTask';
import dateFormat, { masks } from "dateformat";
import TaskListItem from './TaskListItem';
import AddIcon from '@mui/icons-material/Add';

import PodcastsIcon from '@mui/icons-material/Podcasts';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';


import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Container from '@mui/material/Container';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';

import TextField from '@mui/material/TextField';



const PodcastDetails = () => {
    const [ podcast, setPodcast ] = useState(null);
    const [ tasks, setTasks ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const { id } = useParams();
    const [checked, setChecked] = React.useState([1]);


    // const handleSubmit = async e => {
    //     e.preventDefault();
    //     const headers = {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     }
    //     const body = { topic: topic, description: description, guest: guest, release_date: releaseDate }
    //     const options = {
    //         method: "POST",
    //         headers,
    //         body: JSON.stringify(body)
    //     }
    //     await fetch('http://localhost:9292/podcasts', options);
    //     // redirect to Podcast List
    //     navigate("/podcasts");
    // }

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

  
        // const status = task.todo_status;
        // let body = {};
        // const headers = {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json'
        // }
        // const options = {
        //     method: "PATCH",
        //     headers,
        //     body: JSON.stringify(body)
        // }

        // if (status == "incomplete") {

        // } elsif (status == "complete") {
        //     body = {hellp}
        // }

        // await fetch(`http://localhost:9292/tasks/${ task.id }`, options);
        // const data = await resp.json();
        // setTasks(data)

    };

    const handleRemove = async id => {
        const resp = await fetch(`http://localhost:9292/tasks/${ id }`, { method: "DELETE" })
        const data = await resp.json();

        setTasks(tasks.filter( task => task.id != id))
    }
       
        // const headers = {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json'
        // }
        // fetch(`http://localhost:9292/tasks/${ value.id }`, {
        //     method: "DELETE",
        //     headers: headers
        // })
        // .then(resp => resp.json())


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
                        title={ `${podcast.topic}, featuring ${ podcast.guest }` }
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
                                 // { todo.to_do } - { todo.todo_status }
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