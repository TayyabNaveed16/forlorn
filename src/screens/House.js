import React, { useState, useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import houseOnHill from '../music/houseOnHill.mp3';
import forestHouse from '../images/forestHouse.jpg';
import walkBushes from '../soundEffects/walkBushes.mp3';
import { VolumeSlash, VolumeHigh } from 'iconsax-react';


const House = () => {
    const [isMuted, setIsMuted] = useState(false);
    const [storyIndex, setStoryIndex] = useState(0);
    const [isSelected1, setIsSelected1] = useState(false);
    const [isSelected2, setIsSelected2] = useState(false);
    const [tookFrontEntrance, setTookFrontEntrance] = useState(false);
    const [findShelterSound, setFindShelterSound] = useState(false);

    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current || new Audio(houseOnHill);
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

    const continueButton = () => {


        setIsSelected1(false);
        setIsSelected2(false);
        setStoryIndex((prevIndex) => prevIndex + 1);

    };

    const toggleMute = () => {
        // Toggle mute state
        setIsMuted((prevIsMuted) => !prevIsMuted);
    };
    // First Choice
    const frontEntrance = () => {
        setIsSelected1(true);
        setIsSelected2(false);
        setTookFrontEntrance(true);
    }

    const backEntrance = () => {
        setIsSelected2(true);
        setIsSelected1(false);
        setTookFrontEntrance(false);
    }


    return (

        <div className="h-screen bg-cover" style={{ backgroundImage: `url(${forestHouse})` }}>
            <div className="fade-in-text flex h-1/3 items-center justify-center">
                {storyIndex === 0 && (
                    <TypeAnimation
                        sequence={[
                            "After walking for hours, you finally see a house in the distance. Relieved, you pick your pace and head towards it. ",
                            4000,
                            "Your relief is but fleeting. Upon closer inspection, the house appears decrepit and abandoned. Some of the windows have been boarded up, and clusters of the balcony balusters are either broken, disjointed, or missing entirely. An ominous fog surrounds the house, almost as if adumbrating danger.",
                            4000,
                            "At first, you hesitate, but another shiver serves as a stark reminder of how little choice you actually have.",
                            4000,
                            "You finally muster up the courage to approach the house. As you draw nearer, it dawns on you that you could..."
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}
                        style={{ fontSize: '2.5em', textAlign: 'justify', marginTop: '20%', padding: '15%', color: '#94a3b8', display: 'inline-block' }}
                    />
                )}

                {storyIndex === 1 && (
                    <div className='justify-center items-center mt-80'>
                        <h1 className='text-justify font-serif text-7xl text-slate-400 '>You...</h1>
                        <div className='mt-28'>
                            <button
                                className={`mr-20 font-serif text-4xl text-slate-400 cursor-pointer inline-block 
                                    ${isSelected1 ? 'border-b-4 border-gray-700' : 'hover:border-b-4 hover:border-b-gray-700 hover:animate-pulse focus:border-b-4 focus:animate-pulse active:border-b-4 active:animate-pulse'}`}
                                onClick={() => frontEntrance()}
                            >
                                Use the front door.
                            </button>

                            <button
                                className={`ml-20 font-serif text-4xl text-slate-400 cursor-pointer inline-block 
                                    ${isSelected2 ? 'border-b-4 border-gray-700' : 'hover:border-b-4 hover:border-b-gray-700 hover:animate-pulse focus:border-b-4 focus:animate-pulse active:border-b-4 active:animate-pulse'}`}
                                onClick={() => backEntrance()}
                            >
                                Use the back entrance.
                            </button>
                        </div>
                    </div>
                )}



            </div>

            {/* Button to Continue */}
            <button className='absolute inset-x-0 bottom-32 font-serif text-4xl text-slate-200 hover:animate-pulse cursor-pointer' onClick={continueButton}>
                Continue
            </button>

            {/* Toggle mute button */}

            <div className='absolute bottom-0 right-0 pr-5'>
                <button onClick={toggleMute}>
                    {isMuted ? <VolumeSlash size="100" color="gray" /> : <VolumeHigh size="100" color="gray" />}
                </button>
            </div>
        </div >
    );
};

export default House;
