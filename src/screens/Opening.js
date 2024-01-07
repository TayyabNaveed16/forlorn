import React, { useState, useEffect, useRef } from 'react';
import MenuMusic from '../music/Jungle.mp3';
import jungle from '../images/jungle.jpg';


function Opening() {
    const [showText, setShowText] = useState(false);
    const [showSecondWord, setShowSecondWord] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {

        const audio = audioRef.current || new Audio(MenuMusic);
        audio.loop = true; // Enable looping

        // Set initial mute state
        audio.muted = isMuted;

        // Play the audio
        audio.play().catch((error) => {
            console.error('Autoplay prevented:', error);
        });

        audioRef.current = audio; // Save the audio element in the ref

        // Set showText to true after a short delay (e.g., 1000 milliseconds)
        const firstWordDelay = setTimeout(() => {
            setShowText(true);
            toggleMute();
        }, 2000);

        // Set showSecondWord to true after another short delay
        const secondWordDelay = setTimeout(() => {
            setShowSecondWord(true);
        }, 4000);

        return () => {
            clearTimeout(firstWordDelay);
            clearTimeout(secondWordDelay);
            audio.pause();

        };
    }, []);

    const toggleMute = () => {
        // Toggle mute state
        setIsMuted(false);
    };

    const handleClick = () => {
        // Logic to handle new text when the button is clicked
        // You can update the state or trigger other actions here
    };

    const containerStyle = {
        backgroundImage: `url(${jungle})`,
        backgroundSize: 'cover',
        height: '100vh',
    };

    const fadeTextStyle = {
        opacity: 0,
        transition: 'opacity 500ms ease-in-out',
    };

    return (
        <div style={containerStyle}>
            <div style={{ ...fadeTextStyle, opacity: showText ? 1 : 0 }} className="fade-in-text flex h-1/4 items-center justify-center">
                <p className="font-serif text-4xl text-slate-400 p-10">You wake up with a start. You're cold, shivering. You look around yourself and barely see anything. You wake up with a start. You're cold, shivering. You look around yourself and barely see anything.  You wake up with a start. You're cold, shivering. You look around yourself and barely see anything.  You wake up with a start. You're cold, shivering. You look around yourself and barely see anything. </p>
            </div>
            <div style={{ ...fadeTextStyle, opacity: showSecondWord ? 1 : 0 }} className="fade-in-text">
                <p className="font-serif text-4xl text-slate-400 p-10">You wake up with a start. You're cold, shivering. You look around yourself and barely see anything. You wake up with a start. You're cold, shivering. You look around yourself and barely see anything.  You wake up with a start. You're cold, shivering. You look around yourself and barely see anything.  You wake up with a start. You're cold, shivering. You look around yourself and barely see anything. </p>      </div>
            <button onClick={handleClick}>Next</button>
        </div>
    );
}

export default Opening;
