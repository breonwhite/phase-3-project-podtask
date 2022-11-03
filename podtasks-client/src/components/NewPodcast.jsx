import { stripBasename } from '@remix-run/router';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';




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
        <Button variant="contained" type="submit">SUBMIT</Button>
        </form>
            {/* <TextField label="fullWidth" id="fullWidth" margin="normal" /> */}
    
    </Box>
    // <Box
    // sx={{
    //    m: 1, width: '100',
    // }}
    // noValidate
    // >
    // <form onSubmit={ handleSubmit }>
    //     <FormControl sx={{ width: '100%', mt: 1, mr: 1 }}>
    //         <TextField 
    //             fullWidth
    //             variant="filled"
    //             id="topic" 
    //             name="topic"
    //             label={'Topic'}
    //             value={ topic }
    //             onChange={ e => setTopic( e.target.value ) } autoFocus={ true } 
    //         />
    //     </FormControl>
    //     <FormControl sx={{ width: '100%', mt: 1, mr: 1 }}>
    //         <TextField 
    //             fullWidth
    //             variant="filled"
    //             id="topic" 
    //             name="topic"
    //             label={'Topic'}
    //             value={ topic }
    //             onChange={ e => setTopic( e.target.value ) } autoFocus={ true } 
    //         />
    //     </FormControl>
    //     <FormControl sx={{ width: '100%', mt: 1, mr: 1 }}>
    //         <TextField 
    //             fullWidth
    //             variant="filled"
    //             id="topic" 
    //             name="topic"
    //             label={'Topic'}
    //             value={ topic }
    //             onChange={ e => setTopic( e.target.value ) } autoFocus={ true } 
    //         />
    //     </FormControl>

    // </form>
    // </Box>
//     <div>
//         <h1>NewPodcast</h1>
//         <form onSubmit={ handleSubmit }>
//             <div>
//                 <label>Topic: </label>
//                 <input type="text" value={ topic } onChange={ e => setTopic( e.target.value ) } autoFocus={ true } />
//             </div>
//             <div>
//                 <label>Description: </label>
//                 <input type="text" value={ description } onChange={ e => setDescription( e.target.value ) } />
//             </div>
//             <div>
//                 <label>Guest Speaker: </label>
//                 <input type="text" value={ guest } onChange={ e => setGuest( e.target.value ) }/>
//             </div>
//             <div>
//                 <label>Release Date: </label>
//                 <input type="date" value={ releaseDate } onChange={ e => setReleaseDate( e.target.value ) }/>
//             </div>
//             <br />
//             <input type="submit" value="Add new Podcast" />

//     </div>
//   )
    )
}

export default NewPodcast

