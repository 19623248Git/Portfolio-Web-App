import { type Skill } from "../Skill_Display/skills/type"

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
                                        {skills.map((SkillObj) => (
                                                <div key={SkillObj.skill} className="flex flex-row items-center justify-between w-[40%] py-4">
                                                        <h1 className="text-xl">
                                                                {SkillObj.skill}
                                                        </h1>
                                                        <img 
                                                                loading="lazy" 
                                                                src={`${SkillObj.src}`} 
                                                                className="object-fill" 
                                                                style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
                                                        />
                                                </div>
                                        ))}
                                </div>
                        </div>
                </div>
        )

}