import { div } from "motion/react-client";
import { Typewriter } from "../components/TypeWriter";
import ProfilePicStyled from "../components/profile_pic";

function Home(){

        return (    
                <div className="min-h-screen flex justify-center items-center bg-cover bg-center bg-[url(synthwave_bg.jpg)]">
                        
                        {/* div home */}
                        <div className='bg-[#262334] flex flex-col items-center justify-center gap-4'>

                                {/* navbar ish like vscode */}
                                <div className="flex w-full bg-[#241b2f] text-[16px] overflow-x-auto">
                                
                                        {/* SELECTED TAB: Home.tsx */}
                                        {/* bg-[#262334] makes it blend seamlessly into the main content below. Added white text so it stands out. */}
                                        <div className="flex items-center gap-2 bg-[#262334] text-white py-2 px-4 min-w-max cursor-pointer">
                                                <img src="react.svg" className="w-[20px] h-[20px] shrink-0" alt="React Logo" />
                                                <span>Home.tsx</span>
                                        </div>

                                        {/* UNSELECTED TAB: Skills.tsx */}
                                        {/* bg-[#241b2f] keeps it dimmed. hover:bg-[#262334] gives it a nice highlight when the mouse is over it. */}
                                        <div className="flex items-center gap-2 bg-[#241b2f] text-[#7e8390] py-2 px-4 min-w-max cursor-pointer hover:bg-[#262334] hover:text-white transition-colors">
                                                <img src="react.svg" className="w-[20px] h-[20px] shrink-0" alt="React Logo" />
                                                <span>Skills.tsx</span>
                                        </div>

                                        {/* UNSELECTED TAB: Projects.tsx */}
                                        <div className="flex items-center gap-2 bg-[#241b2f] text-[#7e8390] py-2 px-4 min-w-max cursor-pointer hover:bg-[#262334] hover:text-white transition-colors">
                                                <img src="react.svg" className="w-[20px] h-[20px] shrink-0" alt="React Logo" />
                                                <span>Projects.tsx</span>
                                        </div>

                                        {/* UNSELECTED TAB: Socials.tsx */}
                                        <div className="flex items-center gap-2 bg-[#241b2f] text-[#7e8390] py-2 px-4 min-w-max cursor-pointer hover:bg-[#262334] hover:text-white transition-colors">
                                                <img src="react.svg" className="w-[20px] h-[20px] shrink-0" alt="React Logo" />
                                                <span>Socials.tsx</span>
                                        </div>

                                </div>

                                {/* Content div */}
                                <div className="flex flex-col items-center justify-center gap-8 p-8 md:p-20 md:pt-8 w-full">
                                        <div className="flex flex-col-reverse md:flex-row items-center gap-8 w-full justify-center">
                                                <div className="flex flex-col gap-4 justify-center self-stretch">
                                                        <h1 className="text-3xl text-[#72f1b8] text-right">
                                                                Software Developer
                                                        </h1>
                                                        <h2 className="text-[#fede5d] text-s text-right">
                                                                I'm Jovi, nice meeting you!
                                                        </h2>
                                                </div>

                                                <ProfilePicStyled />

                                        </div>

                                        {/* Status div */}
                                        <div className="text-[#ff7edb]">
                                                <Typewriter text="Looking for internship, please contact me through my socials!"/>
                                        </div>
                                </div>

                        </div>
                </div>
        )

}

export default Home;