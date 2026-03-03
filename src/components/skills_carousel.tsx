import { type Skill } from "../Skill_Display/skills/type"
import { useRef, useEffect, useState } from 'react';
import { motion } from "motion/react";

//  data from json
import skillsData from '../Skill_Display/skills/data.json';

const skills = skillsData as Skill[];

// Constants
const IMAGE_SIZE: number = 57;

function SkillsCarousel(){
        const [index, setIndex] = useState(0);
        const [GAP, setGAP] = useState(0);
        const containerRef = useRef<HTMLDivElement>(null);
        const motionRef = useRef<HTMLDivElement>(null);

        // initial centering carousel
        useEffect(() => {
                if (containerRef.current && motionRef.current) {
                        const containerHeight = containerRef.current.clientHeight;
                        
                        // Get gap value from motion.div
                        const computedStyle = window.getComputedStyle(motionRef.current);
                        console.log('Motion div gap:', computedStyle.gap);
                        const gapValue = parseInt(computedStyle.gap) || 0;
                        setGAP(gapValue);
                        
                        // Center the container
                        const paddingTop = (containerHeight - IMAGE_SIZE) / 2;
                        containerRef.current.style.paddingTop = `${Math.max(0, paddingTop)}px`;
                        containerRef.current.style.paddingBottom = `${Math.max(0, paddingTop)}px`;
                }
        }, []);


        const nextSkill = () => {
                if (index < skills.length - 1) setIndex(index + 1);
        };

        const prevSkill = () => {
                if (index > 0) setIndex(index - 1);
        };

        // Log motion.div y value when it changes
        // useEffect(() => {
        //         const yValue = -index * (IMAGE_SIZE + GAP);
        //         console.log(`Motion.div animate y value: ${yValue}px (index: ${index}, IMAGE_SIZE: ${IMAGE_SIZE}, GAP: ${GAP})`);
        // }, [index, GAP]);

        return(
                <>
                        <div className="flex flex-col items-center justify-around h-full w-full">
                                
                                <button 
                                        onClick={prevSkill}
                                        disabled={index === 0}
                                        className="px-4 py-2 bg-[#ff7a6e] text-white rounded hover:bg-[#ff8a7e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                        ↑ Up
                                </button>

                                <div 
                                        ref={containerRef}
                                        className="flex flex-col text-white overflow-hidden h-[60%] w-[60%] border-2 relative"
                                >
                                        <motion.div
                                                ref={motionRef}
                                                animate={{ y: -index * (IMAGE_SIZE + GAP) }}
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                className="flex flex-col gap-5"
                                        >
                                                {skills.map((skillObj) => (
                                                        <div key={skillObj.skill} className="flex flex-row items-center justify-center gap-4">
                                                                <img 
                                                                        loading="lazy" 
                                                                        src={`${skillObj.src}`} 
                                                                        className="object-fill" 
                                                                        style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
                                                                />
                                                                <h1 className="text-2xl">
                                                                        {skillObj.skill}
                                                                </h1>
                                                        </div>
                                                ))}
                                        </motion.div>
                                </div>

                                
                                <button 
                                        onClick={nextSkill}
                                        disabled={index === skills.length - 1}
                                        className="px-4 py-2 bg-[#ff7a6e] text-white rounded hover:bg-[#ff8a7e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                        ↓ Down
                                </button>
                        </div>
                </>
        )
}

export default SkillsCarousel
