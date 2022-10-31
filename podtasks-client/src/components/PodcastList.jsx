import React, { useEffect, useState } from 'react';
import PodcastCard from './PodcastCard';

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
        PodcastList
        { podcastCards }
    </div>
    
  )
}

export default PodcastList