import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import useSound from "use-sound"; // for handling the sound
import paganini from "./EFP/Paganini.wav"; // importing the music
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons"; // for customazing the icons
import "./Styles/music.css";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [status, setStatus] = useState(10);
  const [volume, setVolume] = useState(true);
  const [play, { pause, duration, sound }] = useSound(paganini, { volume });

  const playingButton = () => {
    if (isPlaying) {
      pause(); // this will pause the audio
      setIsPlaying(false);
    } else {
      play(); // this will play the audio
      setIsPlaying(true);
    }
  };

  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  }); // current position of the audio in minutes and seconds

  const [seconds, setSeconds] = useState(); // current position of the audio in seconds

  const sec = duration / 1000;
  const min = Math.floor(sec / 60);
  const secRemain = Math.floor(sec % 60);
  const time = {
    min: min,
    sec: secRemain,
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([])); // setting the seconds state with the current state
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  let band_title = "Exit From Paradise";
  let song_title = "Paganini";

  return (
    <div className="component">
      <div>
        <Card class="card bg-light border-dark mb-3">
          <Card.Body>
            <Card.Title> {band_title} </Card.Title>
            <Card.Text>
              <div class="card-text">
                <b> </b>{" "}
              </div>
            </Card.Text>

            <img className="musicCover" src="https://picsum.photos/200/200" />
            <div>
              <h2 className="title"> {song_title}</h2>
              <h3 className="subTitle"></h3>
            </div>
            <div>
              <button className="playButton">
                <IconContext.Provider value={{ size: "3em", color: "#0f283a" }}>
                  <BiSkipPrevious />
                </IconContext.Provider>
              </button>
              {!isPlaying ? (
                <button className="playButton" onClick={playingButton}>
                  <IconContext.Provider value={{ size: "3em", color: "#0f283a" }}>
                    <AiFillPlayCircle />
                  </IconContext.Provider>
                </button>
              ) : (
                <button className="playButton" onClick={playingButton}>
                  <IconContext.Provider value={{ size: "3em", color: "#0f283a" }}>
                    <AiFillPauseCircle />
                  </IconContext.Provider>
                </button>
              )}
              <button className="playButton">
                <IconContext.Provider value={{ size: "3em", color: "#0f283a" }}>
                  <BiSkipNext />
                </IconContext.Provider>
              </button>
            </div>
            <div>
              <div className="time">
                <p>
                  {currTime.min}:{currTime.sec}
                </p>
                <p>
                  {time.min}:{time.sec}
                </p>
              </div>
              <input
                type="range"
                min="0"
                max={duration / 1000}
                default="0"
                value={seconds}
                className="timeline"
                onChange={(e) => {
                  sound.seek([e.target.value]);
                }}
              />
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
