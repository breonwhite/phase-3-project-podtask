import React, { useEffect, useState } from 'react';
import PodcastCard from './PodcastCard';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const PodcastList = ({ podcasts, setPodcasts }) => {
    // const [ podcasts, setPodcasts ] = useState([])
    
    // useEffect(() => {
    //     async function fetchData() {
    //         const resp = await fetch('http://localhost:9292/podcasts')
    //         const data = await resp.json();
    //         setPodcasts(data);
    //     }
    //     fetchData();
    // }, [])

    const deletePodcast = async id => {
        const resp = await fetch(`http://localhost:9292/podcasts/${ id }`, { method: "DELETE" })
        const data = await resp.json();

        setPodcasts(podcasts.filter( p => p.id != id))
    }
    
    const podcastCards = podcasts.map((podcast, index) => <PodcastCard key={ index } podcast={ podcast } deletePodcast={ deletePodcast } />)


  
    return (
        <div>
            <h1>Your Podcasts</h1>
        <Container>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container justifyContent="center" rowSpacing={{ xs: 1, sm: 1, md: 2 }} sx={{ width: '100%' }}>
                { podcastCards }
            </Grid>
        </Box>
        </Container>
        </div>
  )
}

export default PodcastList
