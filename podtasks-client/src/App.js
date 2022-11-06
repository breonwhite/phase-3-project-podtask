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

  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/podcasts" element={ <PodcastList /> } />
        <Route path="/podcasts/new" element={ <NewPodcast /> } />
        <Route path="/podcasts/:id" element={ <PodcastDetails /> } />
        <Route path="/podcasts/:id/edit" element={ <PodcastEdit /> } />
        <Route path="/tasks" element={ <TaskList /> } />
        <Route element={ <PageNotFound /> } />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
