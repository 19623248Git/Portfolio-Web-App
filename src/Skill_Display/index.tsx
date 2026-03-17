import SkillsInfScroll from "../components/skills_inf_scroll"
import { motion } from "framer-motion";
import { useState } from "react"

function SkillsDisplay(){

        const [skillColor, setSkillColor] = useState<string>("#6b7280");

        return(
                <div className="w-full h-full relative">
                        
                        <motion.h1 
                                className="absolute top-1/2 -translate-y-1/2 left-10 [writing-mode:vertical-rl] [text-orientation:upright] text-5xl tracking-widest font-bold"
                                animate={{ color: skillColor }}
                                transition={{ duration: 0.2 }}
                        >
                                SKILLS
                        </motion.h1>
                        <SkillsInfScroll setSkillColor={setSkillColor}/>
                        
                </div>
        )

}

export default SkillsDisplay