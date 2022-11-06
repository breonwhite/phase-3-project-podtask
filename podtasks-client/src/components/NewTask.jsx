import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddIcon from '@mui/icons-material/Add';

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
    <form onSubmit={ handleSubmit } >
            <Stack direction="row" spacing={2} sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <TextField id={ task } label="Add a new task" variant="standard" value={ task } onChange={ e => setTask( e.target.value ) } autoFocus={ true } sx={{ width: '85%' }} />
            <Button
                sx={{ width: '10%' }}
                variant="contained"
                type="submit"
                size="large"
                startIcon={<AddIcon />}>
            </Button>
            </Stack>
    </form>
  )
}

export default NewTask