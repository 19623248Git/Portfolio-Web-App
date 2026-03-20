// import { useState, useCallback } from "react";
import { type Skill } from "../Skill_Display/skills/type"
import AutoScroll, {type AutoScrollOptionsType} from 'embla-carousel-auto-scroll';
import { motion } from 'framer-motion';
import chroma from "chroma-js";
// import { FaPlay, FaPause } from "react-icons/fa";

// trying out this new carousel library
import useEmblaCarousel from 'embla-carousel-react';

//  data from json
import skillsData from '../Skill_Display/skills/data.json';

const skills = skillsData as Skill[];

const IMAGE_SIZE : number = 38

const gradients : string[] = ["#FF7EDB","#FF7A6E","#FEDE5D","#72F1B8", "#36F9F6", "#FF7EDB"]

const getColorForIndex = (index: number) : string => {
    
        
        const percentage = index / skills.length;

        return chroma.scale(gradients)(percentage).hex();

};

interface SkillsInfScrollProps {
    setSkillColor: (color: string) => void;
}

export default function SkillsInfScroll({ setSkillColor } : SkillsInfScrollProps){
        
        // the autoplay options

        const options: AutoScrollOptionsType = {
                speed: 2,
                stopOnInteraction: false
        }

        // initialize the embla carousel

        const [emblaRef] = useEmblaCarousel({ 
                loop: true, 
                dragFree: true, 
                axis: 'y' 
        },[AutoScroll(options)]
        );

        return(
                <div className="flex w-full h-full justify-center items-center">
                        
                        <div 
                                ref={emblaRef}
                                className="overflow-hidden h-[80%] w-[60%] text-white border border-white"
                        >
                                <div className="flex flex-col items-center h-full">
                                        {skills.map((SkillObj, index) => {
                                                
                                                const itemColor : string = getColorForIndex(index);

                                                return (
                                                <motion.div
                                                        key={`${SkillObj.skill}-${index}`} 
                                                        className="flex w-[80%] items-center justify-center my-2 border border-1 rounded-r-4xl"

                                                        initial="dimmed"
                                                        whileInView="highlighted"

                                                        variants={{
                                                                dimmed: { backgroundColor: "rgba(0,0,0,0)", color: "#6b7280" },
                                                                highlighted: { backgroundColor: itemColor, color: "#000000", transition: { duration: 0.2 } }
                                                        }}
                                                        
                                                        viewport={{ 
                                                        margin: "-49% 0px -49% 0px",
                                                        once: false
                                                        }}
                                                        
                                                        onViewportEnter={() => setSkillColor(itemColor)}

                                                        transition={{ duration: 0.2 }}
                                                >
                                                        <div className="flex flex-row items-center justify-between w-[60%] py-8 shrink-0">
                                                                <h1 className="text-xl font-bold">
                                                                        {SkillObj.skill}
                                                                </h1>
                                                                <motion.div
                                                                        className="p-1.5 rounded-md flex items-center justify-center"
                                                                        variants={{
                                                                        dimmed: { backgroundColor: "rgba(255,255,255,0)" },
                                                                        highlighted: { backgroundColor: "#ffffff", transition: { duration: 0.2 } }
                                                                        }}
                                                                >
                                                                        <img 
                                                                        loading="lazy" 
                                                                        src={`${SkillObj.src}`} 
                                                                        className="object-fill"
                                                                        style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
                                                                        alt={`${SkillObj.skill} icon`}
                                                                        />
                                                                </motion.div>
                                                        </div>
                                                </motion.div>
                                                );
                                        })}
                                </div>
                        </div>
                </div>
        )

}