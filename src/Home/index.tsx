import { Typewriter } from "../components/TypeWriter";
import ProfilePicStyled from "../components/profile_pic";

function Home(){

        return (    
                <div className="flex flex-col items-center justify-center gap-8 p-8 md:p-20 md:pt-8">
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
        )

}

export default Home;