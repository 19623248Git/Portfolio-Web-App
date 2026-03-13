import { type Skill } from "../Skill_Display/skills/type"
import { motion } from 'framer-motion';


// trying out this new carousel library
import useEmblaCarousel from 'embla-carousel-react';

//  data from json
import skillsData from '../Skill_Display/skills/data.json';

const skills = skillsData as Skill[];

const IMAGE_SIZE = 38

export default function SkillsInfScroll(){
        
        // initialize the embla carousel

        const [emblaRef] = useEmblaCarousel({ 
                loop: true, 
                dragFree: true, 
                axis: 'y' 
        });

        return(
                <div className="flex w-full h-full justify-center items-center">
                        
                        <div 
                                ref={emblaRef}
                                className="overflow-hidden h-[80%] w-[60%] text-white border border-white"
                        >
                                <div className="flex flex-col items-center h-full">
                                        {skills.map((SkillObj,index) => (
                                                <motion.div 
                                                        key={`${SkillObj.skill}-${index}`} 
                                                        className="flex flex-row items-center justify-between w-[40%] py-4 shrink-0"
                                                        
                                                        initial={{ color: "#6b7280" }}
                                                        
                                                        whileInView={{ color: "#ffffff" }}
                                                        
                                                        viewport={{ 
                                                                margin: "-49% 0px -49% 0px",
                                                                once: false
                                                        }}
                                                        
                                                        
                                                        transition={{ duration: 0.2 }}
                                                >
                                                        <h1 className="text-xl font-bold">
                                                                {SkillObj.skill}
                                                        </h1>
                                                        <img 
                                                                loading="lazy" 
                                                                src={`${SkillObj.src}`} 
                                                                className="object-fill"
                                                                style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
                                                        />
                                                </motion.div>
                                        ))}
                                </div>
                        </div>
                </div>
        )

}