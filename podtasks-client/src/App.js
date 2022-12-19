import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';

import Home from './components/Home';
import PodcastList from './components/PodcastList';
import NewPodcast from './components/NewPodcast';
import PodcastDetails from './components/PodcastDetails';
import TaskList from './components/TaskList';
import PageNotFound from './components/PageNotFound';
import PodcastEdit from './components/PodcastEdit';

function App() {
  const [ podcasts, setPodcasts ] = useState([])
  const [ tasks, setTasks ] = useState([])
    
    useEffect(() => {
        async function fetchData() {
            const resp = await fetch('http://localhost:9292/podcasts')
            const data = await resp.json();
            setPodcasts(data);
        }
        fetchData();
    }, [podcasts])

    const deletePodcast = id => {
      fetch(`http://localhost:9292/podcasts/${ id }`, { method: "DELETE" })
      .then(resp => resp.json())
      .then(data => setPodcasts(podcasts.filter( p => p.id != id)))
  }


  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/podcasts" element={ <PodcastList podcasts={podcasts} setPodcasts={setPodcasts} deletePodcast={ deletePodcast }  /> } />
        <Route path="/podcasts/new" element={ <NewPodcast setPodcasts={setPodcasts} podcasts={podcasts}/> } />
        <Route path="/podcasts/:id" element={ <PodcastDetails podcasts={podcasts} /> } />
        <Route path="/podcasts/:id/edit" element={ <PodcastEdit /> } />
        <Route path="/tasks" element={ <TaskList /> } />
        <Route element={ <PageNotFound /> } />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
