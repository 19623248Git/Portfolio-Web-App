import { SocialIcon } from 'react-social-icons/component';
import { motion } from "motion/react";

import { type Social } from './socials/type';

import socialsData from './socials/data.json';

//  social icons import idfk
//  oh yeah add this manually lmfao
import 'react-social-icons/linkedin';
import 'react-social-icons/github';
import 'react-social-icons/email';

const socials = socialsData as Social[];

interface socialDisplayProps {
        onComplete?: () => void;
}

export default function SocialDisplay({onComplete} : socialDisplayProps){
        return(
                <motion.div 
                        className='flex flex-row justify-around w-full py-8 my-8 border-2'
                        initial={{ clipPath: "inset(0 100% 0 0)" }}
                        animate={{ clipPath: "inset(0 0% 0 0)" }}
                        transition={{ duration: 1, ease: "circInOut" }}
                        onAnimationComplete={onComplete}
                >
                        {socials.map((social) =>(
                                <div className='group flex flex-col items-center justify-center gap-4'>
                                        <div className='transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:scale-110'>
                                                <SocialIcon
                                                        key={social.icon}
                                                        network={social.icon}
                                                        url={social.url}
                                                        target='_blank'
                                                        rel="noopener noreferrer" 
                                                        bgColor='#ff7a6e'
                                                        style={{height: 64, width: 64}}                                        
                                                />
                                        </div>
                                        <div className='transition-all duration-300 ease-in-out text-l group-hover:text-[#fba199]'>
                                                {social.icon}
                                        </div>
                                </div>
                        ))} 
                </motion.div>
        ) 
}