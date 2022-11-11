import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';



const NewPodcast = () => {
    const [ topic, setTopic ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ guest, setGuest ] = useState("");
    const [ releaseDate, setReleaseDate ] = useState("2022-06-12");

    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        const body = { topic: topic, description: description, guest: guest, release_date: releaseDate }
        const options = {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        }
        await fetch('http://localhost:9292/podcasts', options);
        // redirect to Podcast List
        navigate("/podcasts");
    }

  return (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
        }} >
        <form onSubmit={ handleSubmit }>
        <FormControl sx={{ width: '100%', mt: 1, mr: 1 }}>
        <TextField 
            fullWidth
            required
            margin="normal"
            variant="standard"
            id="topic"
            name="topic"
            label={'Topic'}
            value={ topic }
            helperText={<i>ex: 'How to keep your plants alive', 'Red flags on a first date'</i>}
            onChange={ e => setTopic( e.target.value ) } autoFocus={ true } 
        />
        </FormControl>
        <FormControl sx={{ width: '100%', mt: 1, mr: 1 }}>
        <TextField 
            fullWidth
            required
            margin="normal"
            variant="filled"
            id="description"
            name="description"
            label={'Description'}
            value={ description }
            onChange={ e => setDescription( e.target.value ) } 
        />
        </FormControl>
        <FormControl sx={{ width: '100%', mt: 1, mr: 1 }}>
        <TextField 
            fullWidth
            required
            margin="normal"
            variant="filled"
            id="guest"
            helperText={<i>ex: Oprah Winfrey, Barack Obama, Michael Jordan</i>}
            name="guest"
            label={'Guest'}
            value={ guest }
            onChange={ e => setGuest( e.target.value ) }
        />
        </FormControl>
        <FormControl sx={{ width: '100%', mt: 1, mr: 1 }}>
        <TextField 
            fullWidth
            required
            margin="normal"
            type="date"
            id="releasedate"
            name="releasedate"
            value={ releaseDate }
            onChange={ e => setReleaseDate( e.target.value ) }
        />
        </FormControl>
        <Button variant="contained" type="submit">Add Podcast</Button>
        </form>
    </Box>
    )
}

export default NewPodcast

