import { type Skill } from "../Skill_Display/skills/type"
import { useRef, useEffect, useState } from 'react';
import { motion } from "motion/react";

//  data from json
import skillsData from '../Skill_Display/skills/data.json';

const skills = skillsData as Skill[];

// Image Constant
const IMAGE_SIZE: number = 57;

// Gradient Constant
// FORMAT IN [R, G, B]
const start_gradient:[number, number, number] = [255, 126, 219];
const end_gradient:[number, number, number] = [254, 222, 93];

function SkillsCarousel(){
        const [index, setIndex] = useState(0);
        const [GAP, setGAP] = useState(0);
        const containerRef = useRef<HTMLDivElement>(null);
        const motionRef = useRef<HTMLDivElement>(null);

        const getColorFromGradient = (index: number, total: number) => {

                // edge case, if only there is one object
                if (total <= 1) return `rgb(${start_gradient.join(',')})`;

                const HERE = index / (total-1);
                
                const r = start_gradient[0] + (end_gradient[0] - start_gradient[0]) * HERE;
                const g = start_gradient[1] + (end_gradient[1] - start_gradient[1]) * HERE;
                const b = start_gradient[2] + (end_gradient[2] - start_gradient[2]) * HERE;

                return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;

        }

        // initial centering carousel
        useEffect(() => {
                if (containerRef.current && motionRef.current) {
                        const containerHeight = containerRef.current.clientHeight;
                        
                        // Get gap value from motion.div
                        const computedStyle = window.getComputedStyle(motionRef.current);
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
                                                {skills.map((skillObj, index) => (
                                                        <div key={skillObj.skill} className="flex flex-row items-center justify-center gap-4">
                                                                <img 
                                                                        loading="lazy" 
                                                                        src={`${skillObj.src}`} 
                                                                        className="object-fill" 
                                                                        style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
                                                                />
                                                                <h1 
                                                                        className="text-2xl"
                                                                        style={{
                                                                                color: getColorFromGradient(index,skills.length)
                                                                        }}
                                                                >
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
