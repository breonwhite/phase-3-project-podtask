import React, { useEffect, useState } from 'react';
import PodcastCard from './PodcastCard';

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

const PodcastList = () => {
    const [ podcasts, setPodcasts ] = useState([])
    
    useEffect(() => {
        async function fetchData() {
            const resp = await fetch('http://localhost:9292/podcasts')
            const data = await resp.json();
            setPodcasts(data);
        }
        fetchData();
    }, [])

    const podcastCards = podcasts.map((podcast, index) => <PodcastCard key={ index } podcast={ podcast } />)
  
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