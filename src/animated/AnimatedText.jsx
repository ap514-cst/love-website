import React, { useRef, useState } from "react";
import "./AnimatedText.css";
import img1 from './image/img1.jpeg'
import img2 from './image/img2.jpeg'
import img3 from './image/img3.jpeg'
import { Typewriter } from 'react-simple-typewriter'

const AnimatedText = () => {

  const audioRef=useRef();
  const [isPlaying,setIsPlaying]=useState(false)
  //play song 
  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  //note text
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  };

  const hearts = Array.from({ length: 20 }, (_, i) => (
    <span key={i} className={`heart heart-${i}`}>❤️</span>
  ));
  return (
    <div className="bag-div">
      <div className="animated-container">
        <div className="emoji-background">
          <span className="emoji">✨</span>
          <span className="emoji">🚀</span>
          <span className="emoji">💼</span>
          <span className="emoji">🌟</span>
        </div>
        <div className="animated-text">
          <h1>Hi Pushmita Sarker <span style={{ fontSize: '1.4rem', color: 'gray' }}>(pusmi)</span></h1>
          <div className="note-container">
      <div className="love-note" onClick={handleClick}>
        💌 Click the Love Note
      </div>

      {showMessage && (
        <div className="note-message">
          This is for you ❤️
        </div>
      )}
    </div>
        </div>

      </div>
      <div className="fast-img">

        <div className="img-hover">
          <img src={img3} alt="" />
        </div>
      </div>
      <div className="img-div-2">

        <div className="img-hove-1"><img src={img2} alt="" /></div>
        <div className="img-hover-1"><img src={img1} alt="" /></div>
        <div style={{ padding: '0px 10px' }}>
          <h2 style={{ color: 'red', fontWeight: 'bold', fontFamily: 'cursive' }}><Typewriter words={['HI I AM PUSHMITA SARKER']} cursor
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          ></Typewriter></h2>
        </div>
        <div className="taddy taddy-1">🧸</div>
        <div className="taddy taddy-2">🧸</div>
      </div>
      <div className="love-scene">
      <div className="daddy left-daddy">🧸</div>
      <div className="hearts-container">{hearts}</div>
      <div className="daddy right-daddy">🧸</div>
      <button className="music-toggle" onClick={toggleAudio}>
        {isPlaying ? "🔇 Pause Love Song" : "🎵 Play Love Song"}
      </button>

      <audio ref={audioRef} loop>
        <source src="cute-baby-animals-playful-cute-woodwinds-174354.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
      <p style={{textAlign:'center',color:'gray'}}>Click Play Love Song and enjoy this moment <hr></hr></p>
    </div>
  );
};

export default AnimatedText;
