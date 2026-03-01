import SocialDisplay from "../Social_Display"

export default function Social(){

        return(
                <div className="flex flex-col gap-6 w-full h-full py-2 px-8 md:px-12 md:py-4 text-[#ff7a6e]">
                        <h1 className="text-3xl">
                                SOCIALS
                        </h1>
                        <p className="text-justify">
                                Consider Checking Out my Socials Below! Contact me via my Email!
                        </p>
                        <SocialDisplay />
                </div>
        )

}