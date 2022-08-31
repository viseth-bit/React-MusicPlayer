//import disk from "./images/disk.png";
import "./App.css";
import Player from "./components/Player";
import { useState, useEffect } from "react";

function App() {
  const [songs] = useState([
    {
      title: "Force for Truth",
      artist: "Nomak",
      img_src: "./images/disk2.png",
      src: "./audios/Nomak-Force_For_Truth.mp3",
    },
    {
      title: "យប់មិញនរណាញញឹមដាក់បង (Remix)",
      artist: "ស៊ិន ស៊ីសាមុត",
      img_src: "./images/disk3.png",
      src: "./audios/disk3.wav",
    },
    {
      title: "Dancing Days",
      artist: "Lazy Lewis",
      img_src: "./images/disk.png",
      src: "./audios/Dancing-Days.m4a",
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
     setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
