import { type Skill } from "../Skill_Display/skills/type"
import { useRef, useEffect, useState } from 'react';
import { motion } from "motion/react";

//  data from json
import skillsData from '../Skill_Display/skills/data.json';

const skills = skillsData as Skill[];

const IMAGE_SIZE = 38

export default function SkillsInfScroll(){

        return(
                <div className="flex w-full h-full justify-center items-center">
                        <div 
                                className="flex flex-col overflow-auto h-[80%] w-[60%] text-white items-center border border-white gap-8"
                        >
                                {skills.map((SkillObj) => (
                                        <div key={SkillObj.skill} className="flex flex-row items-center justify-between w-[40%]">
                                                <img 
                                                        loading="lazy" 
                                                        src={`${SkillObj.src}`} 
                                                        className="object-fill" 
                                                        style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
                                                />
                                                <h1 className="text-xl">
                                                        {SkillObj.skill}
                                                </h1> 
                                        </div>
                                ))}
                        </div>
                </div>
        )

}