import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import mainMenu from '../images/mainMenu.png';
import ForlornMainTheme from '../music/ForlornMainTheme.mp3';
import { VolumeSlash, VolumeHigh } from 'iconsax-react';

function Home() {
    const navigate = useNavigate();
    const [isMuted, setIsMuted] = useState(true);
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current || new Audio(ForlornMainTheme);
        audio.loop = true; // Enable looping

        // Set initial mute state
        audio.muted = isMuted;

        // Play the audio
        audio.play().catch((error) => {
            console.error('Autoplay prevented:', error);
        });

        audioRef.current = audio; // Save the audio element in the ref

        return () => {
            // Cleanup if needed
            audio.pause();
        };
    }, [isMuted]);

    const startGame = () => {
        // Navigate to the desired route when the user clicks "Start Game"
        navigate('/opening');
    };

    const toggleMute = () => {
        // Toggle mute state
        setIsMuted((prevIsMuted) => !prevIsMuted);
    };

    return (
        <div style={containerStyle}>
            <div className='flex h-1/4 items-center justify-center'>
                <h1 className="font-serif text-9xl text-slate-400 hover:text-slate-700 cursor-pointer">Forlorn</h1>
            </div>

            <div className='flex h-1/3 items-center justify-center'>
                <h1 onClick={startGame} className="font-serif text-7xl text-slate-400 hover:text-slate-500 hover:animate-pulse cursor-pointer">Start Game
                </h1>
            </div>

            <div className='flex h-96 items-end justify-end	pr-5'>
                <button onClick={toggleMute}>
                    {isMuted ? <VolumeSlash size="100" color="gray" /> : <VolumeHigh size="100" color="gray" />}
                </button>
            </div>

        </div>
    );
}

const containerStyle = {
    backgroundImage: `url(${mainMenu})`,
    backgroundSize: 'cover',
    height: '100vh',
};

export default Home;
