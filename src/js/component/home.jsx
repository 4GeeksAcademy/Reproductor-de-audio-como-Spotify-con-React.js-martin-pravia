import React, { useState, useRef, useEffect } from "react";

//create your first component
const Home = () => {
  const [songs, setSongs] = useState([]);
  const [songIndex, setSongIndex] = useState(0);
  const audio = useRef(null);

  useEffect(() => {
    fetch("https://playground.4geeks.com/sound/songs")
      .then((response) => {
        if (!response.ok) {
          throw new Error("ha ocurrido un error");
        }
        return response.json();
      })
      .then((dataRecived) => {
        console.log(dataRecived);
        setSongs(dataRecived.songs);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const playSong = (index) => {
    setSongIndex(index);
    console.log(audio.current);
    audio.current.src = `https://playground.4geeks.com${songs[index].url}`;
    audio.current.load();
    audio.current.play();
    console.log(audio);
  };

  const pauseSong = (index) => {
    audio.current.pause();
  };

  const nextSong = () => {
    const next = songIndex >= songs.length - 1 ? 0 : songIndex + 1;
    playSong(next);
  };

  const prevSong = () => {
    const prev = songIndex > 0 ? songIndex - 1 : songs.length - 1;
    playSong(prev);
  };
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid text-bg-success p-4">
          <span className="navbar-brand mb-0 h1">Spotify home-made</span>
        </div>
      </nav>
      <div className="text-start">
        <ol className="list-group list-group-numbered">
          {songs.map((song, index) => {
            return (
              <li
                key={song.id}
                className="list-group-item list-group-item-action list-group-item-success"
                onClick={() => playSong(index)}
              >
                {song.name}
              </li>
            );
          })}
        </ol>
      </div>
      <footer className="position-fixed bottom-0 w-100 bg-success text-center ">
        <audio ref={audio}></audio>
        <div className="d-flex justify-content-around align-items-center fs-1">
          <button
            className="btn btn-success border border-white"
            onClick={() => {
              audio.current.pause();
            }}
          >
            <i className="bi bi-pause-btn"></i>
          </button>
          <button
            className="btn btn-success border border-white"
            onClick={() => {
              audio.current.play();
            }}
          >
            <i className="bi bi-play-btn"></i>
          </button>
          <button className="btn btn-success border border-white" onClick={prevSong}>
            <i className="bi bi-skip-backward-btn"></i>
          </button>
          <button className="btn btn-success border border-white" onClick={nextSong}>
            <i className="bi bi-fast-forward-btn"></i>
          </button>
        </div>
      </footer>
    </>
  );
};

export default Home;
