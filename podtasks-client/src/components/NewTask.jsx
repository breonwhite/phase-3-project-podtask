import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const NewTask = ({ podcast }) => {
    const [ task, setTask ] = useState("");

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
    }
  
    return (
    <form onSubmit={ handleSubmit } >
            <Stack direction="row" spacing={2} sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <TextField id={ task } label="Enter a task to add to your list" variant="standard" value={ task } onChange={ e => setTask( e.target.value ) } autoFocus={ true } sx={{ width: '85%' }} />
            <Button
                sx={{ width: '10%' }}
                variant="contained"
                type="submit"
                size="large"
                startIcon={<PlaylistAddIcon />}>Add
            </Button>
            </Stack>
    </form>
  )
}

export default NewTask