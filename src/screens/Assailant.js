import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import Assailant1 from '../music/AssailantAttacking.mp3';
import AxeMan from '../images/AxeMan.jpg';
import { useLocation } from 'react-router-dom';
import HunterWalking from '../soundEffects/HunterWalking.mp3';
import PeopleScreaming from '../soundEffects/PeopleScreaming.mp3';
import doorCreak from '../soundEffects/doorCreaking.mp3';
import HelpMe from '../soundEffects/HelpMe.mp3';
import AxeHit from '../soundEffects/AxeHit.mp3';

const Assailant = () => {

    const navigate = useNavigate();
    const [storyIndex, setStoryIndex] = useState(0);



    const location = useLocation();

    // From here we access the multiple variables passed from the previous screen.
    const calledOut = location.state.calledOut;
    const findShelter = location.state.findShelter;



    useEffect(() => {
        const audio = new Audio(Assailant1);
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
        setStoryIndex((prevIndex) => prevIndex + 1);
    };

    const creak = () => {
        const creaking = new Audio(doorCreak);
        creaking.play();

        return "creaks";
    }

    const walking = () => {
        const walkingHunter = new Audio(HunterWalking);
        walkingHunter.play();

        return "walking";
    }

    const screams = () => {
        const Wailing = new Audio(PeopleScreaming);
        const Wailing2 = new Audio(HelpMe);

        Wailing.play();
        Wailing2.play();

        return "screams";
    }

    const blows = () => {
        const AxeHitting = new Audio(AxeHit);

        setTimeout(() =>{
            AxeHitting.play();
        }, 2000);

        return "blows";
    }


    return (

        <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${AxeMan})` }}>
            <div className="fade-in-text flex h-3/5 items-center justify-center">


                {storyIndex === 0 && calledOut == true && (
                    <TypeAnimation
                        className="text-2xl text-center text-slate-200 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-200 sm:inline-block"

                        sequence={[
                            `As if on cue, you hear someone ${walking()} outside. You quickly realize the person is swiftly approaching the door you entered from.`,
                            3000,
                            "You get a feeling that this person followed you here. Perhaps you shouldn't have called out in the forest.",
                            3000,
                            // "You run out of the kitchen and into the hallway. You try the door to your left, but it's locked. Instead, you take the stairs directly over it, position yourself against the wall next to the landing, and wait...",
                            "When the the backdoor creaks open, the man is already staring at you. A gruesome figure, the man has messy overgrown hair that covers most of his disfigured face, and the part that is visible is covered in scars and blood.",
                            3000,
                            "It is when he launches himself at you that you realize he is wielding an axe. The assailant swings his axe at you, but you manage to dodge it.",
                            3000,
                            "The assailant swings his axe at you once more, but you manage to grab hold of the handle. In the midst of the struggle, both of you tumble to the ground.",
                            3000,
                            "You realize that the attacker is stronger than you, and you can't keep this up forever. You need to find a way to escape. Glancing around, you look for something to defend yourself with...",

                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}

                    />
                )}


                {storyIndex === 1 && calledOut == true && findShelter == false && (
                    <TypeAnimation
                        className="text-2xl text-center text-slate-200 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-200 sm:inline-block"

                        sequence={[
                            "In the heat of the struggle, your hand brushes against the rocks in your pocket. Swiftly, you withdraw a rock and, with adrenaline-fueled precision, deliver a decisive blow, catching the assailant off guard.",
                            3000,
                            "The assailant slumps to the ground, unconscious. Breathing heavily, you rise to your feet, the weight of the situation settling in...",
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}

                    />
                )}

                {storyIndex === 2 && calledOut == true && findShelter == false && (
                    <TypeAnimation
                        className="text-2xl text-center text-slate-200 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-200 sm:inline-block"

                        sequence={[
                            `You have barely any time to react when you hear more ${screams()} from inside the house.`,
                            2000,
                            "You approach the locked door and hear them clearly. Echoing through the air are screams — agonizing, heart-wrenching, and petrifying screams — emanating from the depths of the basement.",
                            3000,
                            "In that moment, the gravity of the situation dawns on you. You must liberate these people. You must save them...",
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}

                    />
                )}

                {storyIndex === 3 && calledOut == true && findShelter == false && (
                    navigate('/Continued', {
                    })
                )}

                {storyIndex === 1 && calledOut == true && findShelter == true && (
                    <TypeAnimation
                        className="text-2xl text-center text-slate-200 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-200 sm:inline-block"

                        sequence={[
                            "To your dismay, you find nothing. Your assailant eventually overpowers you and steals the axe from your grip. As the weapon changes hands, a sense of dread washes over you...",
                            3000,
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}

                    />
                )}

                {storyIndex === 2 && calledOut == true && findShelter == true && (
                    <TypeAnimation
                        className="text-2xl text-center text-slate-200 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-200 sm:inline-block"

                        sequence={[
                            `The assailant, now in control, delivers relentless and merciless ${blows()} with the axe.`,
                            3000,
                            "Each strike intensifies the pain until your strength wanes, and darkness descends as the assailant's onslaught continues..."
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}

                    />
                )}

                {/* Navigating to the next screen and taking our choices too. */}
                {storyIndex === 3 && calledOut == true && findShelter == true && (
                    navigate('/GameOver', {
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

export default Assailant;
