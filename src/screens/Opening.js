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
    const [findShelter, setFindShelter] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = new Audio(MenuMusic);
        audio.loop = true; // Enable looping

        // Play the audio
        audio.play().catch((error) => {
            console.error('Autoplay prevented:', error);
        });

        return () => {
            // Cleanup if needed
            audio.pause();
        };
    }, []);

    const continueButton = () => {


        //Resetting states
        setIsSelected1(false);
        setIsSelected2(false);

        //Incrementing storyIndex for next sequence
        setStoryIndex((prevIndex) => prevIndex + 1);

    };

    // const toggleMute = () => {
    //     // Toggle mute state
    //     setIsMuted((prevIsMuted) => !prevIsMuted);
    // };

    // First Choice
    const callDarkness = () => {
        setIsSelected1(true);
        setIsSelected2(false);
        setCalledOut(true);
    }

    const stayQuiet = () => {
        setIsSelected2(true);
        setIsSelected1(false);
        setCalledOut(false);
    }

    // Second Choice
    const weapon = () => {
        setIsSelected1(true);
        setIsSelected2(false);
        setFindShelter(false);
    }

    const shelter = () => {
        setIsSelected2(true);
        setIsSelected1(false);
        setFindShelter(true);

    }

    //Callout sound
    const call = () => {
        const callout = new Audio(callOut);
        callout.play();
        return "call";
    }

    const walking = () => {
        const walk = new Audio(walkBushes);
        walk.play();
        return "walking";
    }


    return (
        <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${jungle})` }}>
            <div className="fade-in-text flex h-3/5 items-center justify-center">

                {/* Story Sequence starts here */}
                {storyIndex === 0 && (
                    <TypeAnimation
                        className="text-2xl text-center text-slate-400 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-400 sm:inline-block"

                        sequence={[
                            "You wake up with a start. You wrap your arms around yourself to ward off the biting cold. You shiver uncontrollably as you look around."
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}
                    />
                )}

                {storyIndex === 1 && (
                    <TypeAnimation
                        className="text-2xl text-center text-slate-400 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-400 sm:inline-block"

                        sequence={[
                            "You're in a jungle. The thick foliage beneath and the surrounding chirp of crickets affirms this. You look around but can barely see anything due to the multitude of trees, their looming canopies and twisted branches block out most of the sunlight. You..."
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}
                    />
                )}

                {storyIndex === 2 && (
                    <div className='justify-center items-center mt-28 sm:justify-center sm:items-center sm:mt-48'>
                        <h1 className='ml-2 text-justify font-serif text-4xl text-slate-400 sm:text-justify sm:font-serif sm:text-7xl sm:text-slate-400 '>You...</h1>
                        <div className=' mt-20 sm:mt-28'>
                            <button
                                className={`ml-2 font-serif text-left text-2xl text-slate-400 sm:mr-20 sm:font-serif sm:text-4xl sm:text-slate-400 sm:cursor-pointer sm:inline-block 
                                    ${isSelected1 ? 'border-b-4 border-gray-700' : 'hover:border-b-4 hover:border-b-gray-700 hover:animate-pulse focus:border-b-4 focus:animate-pulse active:border-b-4 active:animate-pulse'}`}
                                onClick={() => callDarkness()}
                            >
                                Call out into the darkness.
                            </button>

                            <button
                                className={` ml-2 mt-14 font-serif text-left text-2xl text-slate-400 sm:ml-20 sm:font-serif sm:text-4xl sm:text-slate-400 sm:cursor-pointer sm:inline-block 
                                    ${isSelected2 ? 'border-b-4 border-gray-700' : 'hover:border-b-4 hover:border-b-gray-700 hover:animate-pulse focus:border-b-4 focus:animate-pulse active:border-b-4 active:animate-pulse'}`}
                                onClick={() => stayQuiet()}
                            >
                                Stay quiet. It could be dangerous.
                            </button>
                        </div>
                    </div>
                )}

                {/* Call Out */}
                {storyIndex === 3 && calledOut === true && (
                    <TypeAnimation
                        className="text-2xl text-center text-slate-400 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-400 sm:inline-block"
                        sequence={[
                            `'Hello? Is anyone out there?' you ${call()} out`,
                            3000,
                            "No response.",
                            3000,
                            "'Can anyone hear me?'",
                            3000,
                            "Your voice is enveloped by the unceasing depths of the forest.",
                            3000,
                            "Still shivering. You pick yourself up and feel your body for injuries but find none. Your memory eludes you. You cannot recall how you got here. You cannot recall your name, your age, family, or any other details about yourself. You...",
                            3000,
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}
                    />
                )}

                {/* Stay Quiet */}
                {storyIndex === 3 && calledOut === false && (
                    <TypeAnimation
                        className="text-2xl text-center text-slate-400 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-400 sm:inline-block"
                        sequence={[
                            "You stay quiet. You're unsure of what lurks in the darkness, and you dare not offer it an invitation.",
                            3000,
                            "Still shivering. You pick yourself up and feel your body for injuries but find none. Your memory eludes you. You cannot recall how you got here. You cannot recall your name, your age, family, or any other details about yourself. You reach for your pockets to check if you're carrying a wallet and, consequently, some form of ID, but find nothing there.",
                            3000,
                            "It dawns on you that you're vulnerable. You're also terribly cold. You..."
                            // 3000,
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}
                    />
                )}

                {storyIndex === 4 && (
                    <div className='justify-center items-center mt-28 sm:justify-center sm:items-center sm:mt-48'>
                        <h1 className='ml-2 text-justify font-serif text-4xl text-slate-400 sm:text-justify sm:font-serif sm:text-7xl sm:text-slate-400 '>You...</h1>
                        <div className=' mt-20 sm:mt-28'>
                            <button
                                className={`ml-2 font-serif text-left text-xl text-slate-400 sm:mr-20 sm:font-serif sm:text-4xl sm:text-slate-400 sm:cursor-pointer sm:inline-block 
                                    ${isSelected1 ? 'border-b-4 border-gray-700' : 'hover:border-b-4 hover:border-b-gray-700 hover:animate-pulse focus:border-b-4 focus:animate-pulse active:border-b-4 active:animate-pulse'}`}
                                onClick={() => weapon()}
                            >
                                Search for a Weapon.
                            </button>

                            <button
                                className={` ml-2 mt-14 font-serif text-left text-xl text-slate-400 sm:ml-20 sm:font-serif sm:text-4xl sm:text-slate-400 sm:cursor-pointer sm:inline-block 
                                ${isSelected2 ? 'border-b-4 border-gray-700' : 'hover:border-b-4 hover:border-b-gray-700 hover:animate-pulse focus:border-b-4 focus:animate-pulse active:border-b-4 active:animate-pulse'}`}
                                onClick={() => shelter()}
                            >
                                Look for shelter. It's getting cold.
                            </button>
                        </div>
                    </div>
                )}

                {storyIndex === 5 && findShelter === true && (
                    <TypeAnimation
                        className="text-2xl text-center text-slate-400 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-400 sm:inline-block"
                        sequence={[
                            `You start ${walking()} in the hopes to find shelter, unsure how much longer you'd survive in this cold. Continue...`,
                            3000,
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}

                    />
                )}

                {storyIndex === 5 && findShelter === false && (
                    <TypeAnimation
                        className="text-2xl text-center text-slate-400 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-400 sm:inline-block"
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
                    />
                )}

                {/* Navigating to the next screen and taking our choices too. */}
                {storyIndex === 6 && (
                    navigate('/theHouse', {
                        state: {
                            calledOut,
                            findShelter,
                        }
                    })
                )}

            </div>

            {/* Button to Continue */}
            <div className='absolute inset-x-0 bottom-32 text-center'>
                <button className='font-serif text-2xl text-slate-200 sm:font-serif sm:text-4xl sm:text-slate-200 sm:hover:animate-pulse sm:cursor-pointer' onClick={continueButton}>
                    Continue
                </button>
            </div>

        </div >
    );
};

export default Opening;
