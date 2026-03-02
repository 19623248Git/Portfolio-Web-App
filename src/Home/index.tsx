import { Typewriter } from "../components/TypeWriter";
import ProfilePicStyled from "../components/profile_pic";
import { useState, useEffect, useMemo } from "react";

function Home(){

        const[IsStatusTyped,SetIsStatusTyped] = useState(false)
        const[IsImageLoaded,SetIsImageLoaded] = useState(false)
        
        useEffect(() => {
                const hasTypedBefore = localStorage.getItem('statusTyped') === 'true';
                SetIsStatusTyped(hasTypedBefore);
        }, []);

        useEffect(()=>{
                const ImageLoadedBefore = localStorage.getItem('imageLoaded') === 'true';
                SetIsImageLoaded(ImageLoadedBefore);
        }, []);

        // Clear localStorage when trying to close tab
        useEffect(() => {
                const handleBeforeUnload = () => {
                        localStorage.removeItem('statusTyped');
                        localStorage.removeItem('imageLoaded');
                };

                window.addEventListener('beforeunload', handleBeforeUnload);

                return () => {
                        window.removeEventListener('beforeunload', handleBeforeUnload);
                };
        }, []);

        // function to update state if the status is already typed, called at the end of the motion animation
        const handleTypingComplete = () => {
                SetIsStatusTyped(true);
                localStorage.setItem('statusTyped', 'true');
        };
        
        // same idea as above but for image
        const whenImageAnimComplete = () => {
                SetIsImageLoaded(true);
                localStorage.setItem('imageLoaded', 'true');
        }

        const statusText = "Looking for internship, please check out my Socials.tsx for contact!";
        
        // useMemo why not :D
        const statusDisplay = useMemo(() => {
                if (IsStatusTyped) {
                        return <div className="text-[#ff7edb]">{statusText}</div>;
                }
                return <Typewriter text={statusText} onComplete={handleTypingComplete} />;
        }, [IsStatusTyped]);

        const imageDisplay = useMemo(() =>{
                return (IsImageLoaded ? 
                        // Unanimated version - just show the profile image directly
                        <div className="relative w-[292px] h-[292px] shrink-0">
                                <div className="absolute inset-0 rounded-full z-20 border-6 border-[#36f9f6]"></div>
                                <img
                                        src="profile.jpg"
                                        alt="profile_picture"
                                        className="absolute inset-0 rounded-full z-10"
                                        width={292}
                                        height={292}
                                />
                        </div>
                        :
                        <ProfilePicStyled onComplete={whenImageAnimComplete} />
                )
        }, [IsImageLoaded])

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

                                {imageDisplay}

                        </div>

                        {/* Status div */}
                        <div className="text-[#ff7edb]">
                                {statusDisplay}
                        </div>
                </div>
        )

}

export default Home;