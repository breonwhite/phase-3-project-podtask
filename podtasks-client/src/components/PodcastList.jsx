import React, { useEffect, useState } from 'react';

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
  
    return (
    <div>PodcastList</div>
  )
}

export default PodcastList