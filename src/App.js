import React, { useEffect, useState } from 'react';
import Play from './Play';
import data from "./data"; 

const songList = data.songs;

function App() {


  return (

    <div className="App">
        <div>
    <h3 className="mb-4">Play a mp3 file - <a href="https://www.cluemediator.com">Clue Mediator</a></h3>
    </div>
    {songList.map(s => (<Play url={s} />))}
    </div>

  );
}

export default App;
