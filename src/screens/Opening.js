import React, { useState, useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import MenuMusic from '../music/Jungle.mp3';
import jungle from '../images/jungle.jpg';
import callOut from '../soundEffects/IsAnyoneOutThere.mp3';
import { useNavigate } from 'react-router-dom';
import walkBushes from '../soundEffects/walkBushes.mp3';
import { VolumeSlash, VolumeHigh } from 'iconsax-react';


const Opening = () => {
    const navigate = useNavigate();
    const [isMuted, setIsMuted] = useState(false);
    const [storyIndex, setStoryIndex] = useState(0);
    const [isSelected1, setIsSelected1] = useState(false);
    const [isSelected2, setIsSelected2] = useState(false);
    const [calledOut, setCalledOut] = useState(false);
    const [calledOutSound, setCalledOutSound] = useState(false);
    const [findShelter, setFindShelter] = useState(false);
    const [findShelterSound, setFindShelterSound] = useState(false);
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

        return () => {
            // Cleanup if needed
            audio.pause();
        };
    }, [isMuted]);

    const continueButton = () => {

        if (calledOutSound === true) {
            const audio = new Audio(callOut);
            audio.play();
        }

        if (findShelterSound === true) {
            const audio = new Audio(walkBushes);
            audio.play();
        }


        setIsSelected1(false);
        setIsSelected2(false);
        setCalledOutSound(false);
        setFindShelterSound(false); 
        setStoryIndex((prevIndex) => prevIndex + 1);

        if (storyIndex === 5) {
            navigate('/theHouse');
        }


    };

    const toggleMute = () => {
        // Toggle mute state
        setIsMuted((prevIsMuted) => !prevIsMuted);
    };
    // First Choice
    const callDarkness = () => {
        setIsSelected1(true);
        setIsSelected2(false);
        setCalledOut(true);
        setCalledOutSound(true);
    }

    const stayQuiet = () => {
        setIsSelected2(true);
        setIsSelected1(false);
        setCalledOut(false);
        setCalledOutSound(false);
    }

    // Second Choice
    const weapon = () => {
        setIsSelected1(true);
        setIsSelected2(false);
        setFindShelter(false);
        setFindShelterSound(false);
    }

    const shelter = () => {
        setIsSelected2(true);
        setIsSelected1(false);
        setFindShelter(true);
        setFindShelterSound(true);

    }


    const containerStyle = {
        backgroundImage: `url(${jungle})`,
        backgroundSize: 'cover',
        height: '100vh',
        position: 'relative',
    };


    return (
        <div style={containerStyle}>
            <div className="fade-in-text flex h-1/3 items-center justify-center">
                {storyIndex === 0 && (
                    <TypeAnimation
                        sequence={[
                            "You wake up with a start. You wrap your arms around yourself to ward off the biting cold. You shiver uncontrollably as you look around.",
                            4000,
                            "You're in a jungle. The thick foliage beneath and the surrounding chirp of crickets affirms this. You look around but barely see anything. Everything is pitch black. You...",
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
                                onClick={() => callDarkness()}
                            >
                                Call out into the darkness.
                            </button>

                            <button
                                className={`ml-20 font-serif text-4xl text-slate-400 cursor-pointer inline-block 
                                    ${isSelected2 ? 'border-b-4 border-gray-700' : 'hover:border-b-4 hover:border-b-gray-700 hover:animate-pulse focus:border-b-4 focus:animate-pulse active:border-b-4 active:animate-pulse'}`}
                                onClick={() => stayQuiet()}
                            >
                                Stay quiet. It could be dangerous.
                            </button>
                        </div>
                    </div>
                )}

                {/* Call Out */}
                {storyIndex === 2 && calledOut === true && (
                    <TypeAnimation
                        sequence={[
                            "'Hello? Is anyone out there?' you call out.",
                            3000,
                            "No response.",
                            3000,
                            "'Can anyone hear me?'",
                            3000,
                            "Your voice is enveloped by the unceasing depths of the forest.",
                            3000,
                            "Still shivering. You pick yourself up and feel your body for injuries but find none. Your memory eludes you. You cannot recall how you got here. You cannot recall your name, your age, family, or any other details about yourself. You...",
                            3000,
                            // "You start walking in the hopes to find shelter, unsure how much longer you'd survive in this cold.",
                            // 3000,
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}
                        style={{ fontSize: '2.5em', marginTop: '20%', textAlign: 'justify', padding: '15%', color: '#94a3b8', display: 'inline-block' }}
                    />
                )}

                {/* Stay Quiet */}
                {storyIndex === 2 && calledOut === false && (
                    <TypeAnimation
                        sequence={[
                            "You stay quiet. You're unsure of what lurks in the darkness, and you dare not offer it an invitation.",
                            3000,
                            "Still shivering. You pick yourself up and feel your body for injuries but find none. Your memory eludes you. You cannot recall how you got here. You cannot recall your name, your age, family, or any other details about yourself. You...",
                            3000,
                            // "You start walking in the hopes to find shelter, unsure how much longer you'd survive in this cold.",
                            // 3000,
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}
                        style={{ fontSize: '2.5em', marginTop: '20%', textAlign: 'justify', padding: '15%', color: '#94a3b8', display: 'inline-block' }}
                    />
                )}

                {storyIndex === 3 && (
                    <div className='justify-center items-center mt-80'>
                        <h1 className='text-justify font-serif text-7xl text-slate-400 '>You...</h1>
                        <div className='mt-28'>
                            <button
                                className={`mr-20 font-serif text-4xl text-slate-400 cursor-pointer inline-block 
                                    ${isSelected1 ? 'border-b-4 border-gray-700' : 'hover:border-b-4 hover:border-b-gray-700 hover:animate-pulse focus:border-b-4 focus:animate-pulse active:border-b-4 active:animate-pulse'}`}
                                onClick={() => weapon()}
                            >
                                Look for something to defend yourself with.
                            </button>

                            <button
                                className={`ml-20 font-serif text-4xl text-slate-400 cursor-pointer inline-block 
                                    ${isSelected2 ? 'border-b-4 border-gray-700' : 'hover:border-b-4 hover:border-b-gray-700 hover:animate-pulse focus:border-b-4 focus:animate-pulse active:border-b-4 active:animate-pulse'}`}
                                onClick={() => shelter()}
                            >
                                Look for shelter. It's getting cold.
                            </button>
                        </div>
                    </div>
                )}

                {storyIndex === 4 && findShelter === true && (
                    <TypeAnimation
                        sequence={[
                            "You start walking in the hopes to find shelter, unsure how much longer you'd survive in this cold. Continue...",
                            3000,
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}
                        style={{ fontSize: '2.5em', marginTop: '20%', textAlign: 'justify', padding: '15%', color: '#94a3b8', display: 'inline-block' }}
                    />
                )}

                {storyIndex === 4 && findShelter === false && (
                    <TypeAnimation
                        sequence={[
                            "You start looking for something to defend yourself with. Minutes pass as you scavenge. The immense cold only stems your efforts.",
                            3000,
                            "At one point the cold becomes unbearable and you decide to make do with what you have. Your search has been in vain. You found nothing other than a handful of rocks. You pocket them and continue walking. Continue...",
                            3000,
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}
                        style={{ fontSize: '2.5em', marginTop: '20%', textAlign: 'justify', padding: '15%', color: '#94a3b8', display: 'inline-block' }}
                    />
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

export default Opening;
