import SocialDisplay from "../Social_Display"
import { useEffect, useState } from "react"

export default function Social(){

        const[isSocialDisplayed,setIsSocialDisplayed] = useState(false);

        // fetch the locally stored state from localstorage
        useEffect(()=>{
                setIsSocialDisplayed(localStorage.getItem('isSocialDisplayed') === 'true');
        },[])

        // function to update the status of the social display
        // this should be called by the motion div when the animation is done 
        const handleSocialDisplayed = () => {
                setIsSocialDisplayed(true);
                localStorage.setItem('isSocialDisplayed', 'true');
        }
        
        // when close tab remove the localstorage

        useEffect(() => {

                const removeLocalStorage = () => {
                        localStorage.removeItem('isSocialDisplayed');
                }

                window.addEventListener('beforeunload', removeLocalStorage);

                // remove the event listener i guess lmao
                return () => {
                        window.removeEventListener('beforeunload',removeLocalStorage);
                }

        },[])

        return(
                <div className="flex flex-col gap-6 w-full h-full py-2 px-8 md:px-12 md:py-4 text-[#ff7a6e]">
                        <h1 className="text-3xl">
                                SOCIALS
                        </h1>
                        <p className="text-justify">
                                Consider Checking Out my Socials Below! Contact me by Email!
                        </p>
                        <SocialDisplay onComplete={handleSocialDisplayed}/>
                </div>
        )

}