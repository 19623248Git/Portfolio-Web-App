import { Typewriter } from "../components/TypeWriter";
import ProfilePicStyled from "../components/profile_pic";
import { useState, useEffect, useMemo } from "react";

function Home(){

        const[IsStatusTyped,SetIsStatusTyped] = useState(false)
        
        useEffect(() => {
                const hasTypedBefore = sessionStorage.getItem('statusTyped') === 'true';
                SetIsStatusTyped(hasTypedBefore);
        }, []);



        // Clear sessionStorage when trying to close tab
        useEffect(() => {
                const handleBeforeUnload = () => {
                        sessionStorage.removeItem('statusTyped');
                };

                window.addEventListener('beforeunload', handleBeforeUnload);

                return () => {
                        window.removeEventListener('beforeunload', handleBeforeUnload);
                };
        }, []);

        // function to update state if the status is already typed, called at the end of the motion animation
        const handleTypingComplete = () => {
                SetIsStatusTyped(true);
                sessionStorage.setItem('statusTyped', 'true');
        };
        


        const statusText = "Looking for opportunities, please contact me through my Socials.tsx!";
        
        // useMemo why not :D
        const statusDisplay = useMemo(() => {
                if (IsStatusTyped) {
                        return <div className="text-[#ff7edb]">{statusText}</div>;
                }
                return <Typewriter text={statusText} onComplete={handleTypingComplete} />;
        }, [IsStatusTyped]);



        return (    
                <div className="flex flex-col items-center justify-center gap-12 px-8 md:px-20 md:pt-8">
                        <div className="flex flex-col-reverse md:flex-row items-center gap-8 w-full justify-center">
                                <div className="flex flex-col gap-4 justify-center self-stretch">
                                        <h1 className="text-3xl text-[#72f1b8] text-right">
                                                Software Developer
                                        </h1>
                                        <h2 className="text-[#fede5d] text-s text-right">
                                                I'm <strong>Jovi</strong>, nice meeting you!
                                        </h2>
                                </div>

                                <ProfilePicStyled />

                        </div>

                        {/* Status div */}
                        <div className="text-[#ff7edb]">
                                {statusDisplay}
                        </div>
                </div>
        )

}

export default Home;