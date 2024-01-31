import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import houseOnHill from '../music/houseOnHill.mp3';
import forestHouse from '../images/forestHouse.jpg';
import { VolumeSlash, VolumeHigh } from 'iconsax-react';
import { useLocation } from 'react-router-dom';
import doorKnock from '../soundEffects/doorKnock.mp3';
import doorCreak from '../soundEffects/doorCreaking.mp3';


const House = () => {
    const navigate = useNavigate();
    // const [isMuted, setIsMuted] = useState(false);
    const [storyIndex, setStoryIndex] = useState(0);
    const [isSelected1, setIsSelected1] = useState(false);
    const [isSelected2, setIsSelected2] = useState(false);
    const [tookFrontEntrance, setTookFrontEntrance] = useState(false);
    const audioRef = useRef(null);

    const location = useLocation();

    // From here we access the multiple variables passed from the previous screen.
    const calledOut = location.state.calledOut;
    const findShelter = location.state.findShelter;


    useEffect(() => {
        const audio = new Audio(houseOnHill);
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

        setIsSelected1(false);
        setIsSelected2(false);
        setStoryIndex((prevIndex) => prevIndex + 1);

    };

    // const toggleMute = () => {
    //     // Toggle mute state
    //     setIsMuted((prevIsMuted) => !prevIsMuted);
    // };

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

    const knock = () => {
        const knocking = new Audio(doorKnock);
        knocking.play();

        return "Knock";
    }

    const creak = () => {
        const creaking = new Audio(doorCreak);
        creaking.play();

        return "creaks";
    }


    return (

        <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${forestHouse})` }}>
            <div className="fade-in-text flex h-3/5 items-center justify-center">
                {storyIndex === 0 && (
                    <TypeAnimation
                        className="text-2xl text-center text-slate-200 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-200 sm:inline-block"

                        sequence={[
                            "After walking for hours, you finally see a house in the distance. Relieved, you pick your pace and head towards it. ",
                            3000,
                            "Your relief is but fleeting. Upon closer inspection, the house appears decrepit and abandoned. Some of the windows have been boarded up, and clusters of the balcony balusters are either broken, disjointed, or missing entirely.",
                            4000,
                            "An ominous fog surrounds the house, almost as if adumbrating danger. At first, you hesitate, but another shiver serves as a stark reminder of how little choice you actually have.",
                            3000,
                            "You finally muster up the courage to approach the house. As you draw nearer, it dawns on you that you could..."
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}

                    />
                )}

                {storyIndex === 1 && (
                    <div className='justify-center items-center mt-28 sm:justify-center sm:items-center sm:mt-48'>
                        <h1 className='ml-2 text-justify font-serif text-4xl text-slate-200 sm:text-justify sm:font-serif sm:text-7xl sm:text-slate-200 '>You...</h1>
                        <div className=' mt-20 sm:mt-28'>
                            <button
                                className={`ml-2 font-serif text-left text-xl text-slate-200 sm:mr-20 sm:font-serif sm:text-3xl sm:text-slate-200 sm:cursor-pointer sm:inline-block 
                                    ${isSelected1 ? 'border-b-4 border-gray-700' : 'hover:border-b-4 hover:border-b-gray-700 hover:animate-pulse focus:border-b-4 focus:animate-pulse active:border-b-4 active:animate-pulse'}`}
                                onClick={() => frontEntrance()}
                            >
                                Use the front door. You pose no threat.
                            </button>

                            <button
                                className={` ml-2 mt-14 font-serif text-left text-xl text-slate-200 sm:ml-20 sm:font-serif sm:text-3xl sm:text-slate-200 sm:cursor-pointer sm:inline-block 
                                    ${isSelected2 ? 'border-b-4 border-gray-700' : 'hover:border-b-4 hover:border-b-gray-700 hover:animate-pulse focus:border-b-4 focus:animate-pulse active:border-b-4 active:animate-pulse'}`}
                                onClick={() => backEntrance()}
                            >
                                Use the back door; it could be dangerous
                            </button>
                        </div>
                    </div>
                )}

                {storyIndex === 2 && tookFrontEntrance == false && (
                    <TypeAnimation
                        className="text-2xl text-center text-slate-200 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-200 sm:inline-block"
                        sequence={[
                            "You walk over to the other side of the house and locate the back door.",
                            3000,
                            "There was no point in knocking since you were using the back door, so you try the door knob.",
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}

                    />
                )}

                {storyIndex === 2 && tookFrontEntrance == true && (
                    <TypeAnimation
                        className="text-2xl text-center text-slate-200 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-200 sm:inline-block"
                        sequence={[
                            `You walk up to the front door and ${knock()}`,
                            3000,
                            "No response.",
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}

                    />
                )}

                {storyIndex === 3 && tookFrontEntrance == false && (
                    <TypeAnimation
                        className="text-2xl text-center text-slate-200 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-200 sm:inline-block"
                        sequence={[
                            `The door ${creak()} opens as you try the knob.`,
                            3000,
                            "You step inside the house...",
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}

                    />
                )}

                {storyIndex === 3 && tookFrontEntrance == true && (
                    <TypeAnimation
                        className="text-2xl text-center text-slate-200 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-200 sm:inline-block"
                        sequence={[
                            `You ${knock()} again.`,
                            3000,
                            "No one's home.",
                            3000,
                            "You try the door knob but the door creaks open the moment you set your hand on it.",
                            3000,
                            "You step inside the house...",
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}

                    />
                )}


                {/* Navigating to the next screen and taking our choices too. */}
                {storyIndex === 4 && tookFrontEntrance == true && (
                    navigate('/FrontDoor', {
                        state: {
                            calledOut,
                            findShelter,
                        }
                    })
                )}

                {storyIndex === 4 && tookFrontEntrance == false && (
                    navigate('/BackDoor', {
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

export default House;
