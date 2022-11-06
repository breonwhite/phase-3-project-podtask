import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PodcastEdit = () => {
    const [ podcast, setPodcast ] = useState(null);
    const { id } = useParams();
    const [ loading, setLoading ] = useState(true);
    const [ topic, setTopic ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ guest, setGuest ] = useState("");
    const [ releaseDate, setReleaseDate ] = useState("2022-06-12");

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const resp = await fetch(`http://localhost:9292/podcasts/${ id }`)
            const data = await resp.json();
            setPodcast(data);
            setLoading(false);
            setTopic(data.topic)
            setDescription(data.description)
            setGuest(data.guest)
            setReleaseDate(data.release_date)
        }
        fetchData();
    }, [])



    const handleSubmit = async e => {
        e.preventDefault();
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        const body = { topic: topic, description: description, guest: guest, release_date: releaseDate }
        const options = {
            method:"PATCH",
            headers,
            body: JSON.stringify(body)
        }
        await fetch(`http://localhost:9292/podcasts/${ id }`, options);
        // redirect to Podcast List
        navigate(`/podcasts/${ id }`);
    }

    if(loading) {
        return <h1>Loading Podcast...</h1>
    } else {

  return (
    <div><br />
    <br />
        <h1>Edit { podcast.topic} </h1>
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
            margin="normal"
            variant="standard"
            id="topic"
            name="topic"
            label={'Topic'}
            value={ topic }
            helperText="Some important text"
            onChange={ e => setTopic( e.target.value ) } autoFocus={ true } 
        />
        </FormControl>
        <FormControl sx={{ width: '100%', mt: 1, mr: 1 }}>
        <TextField 
            fullWidth
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
            margin="normal"
            variant="filled"
            id="guest"
            name="guest"
            label={'Guest'}
            value={ guest }
            onChange={ e => setGuest( e.target.value ) }
        />
        </FormControl>
        <FormControl sx={{ width: '100%', mt: 1, mr: 1 }}>
        <TextField 
            fullWidth
            margin="normal"
            type="date"
            id="releasedate"
            name="releasedate"
            value={ releaseDate }
            onChange={ e => setReleaseDate( e.target.value ) }
        />
        </FormControl>
        <Button variant="contained" type="submit" color="success">Update Podcast</Button>
        </form>
            {/* <TextField label="fullWidth" id="fullWidth" margin="normal" /> */}
    
    </Box>
        
        
        
        </div>
  )
    }
}

export default PodcastEdit