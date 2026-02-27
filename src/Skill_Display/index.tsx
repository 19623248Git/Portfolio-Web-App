import { type Skill } from "./skills/type"
import { SkillDiv } from "../components/skills_div"

//  data from json
import skillsData from './skills/data.json';

const skills = skillsData as Skill[];

function SkillsDisplay(){

        return(
                <>
                        <div className="flex flex-col gap-5">
                                {skills.map((skillObj) => (
                                        <SkillDiv key={skillObj.skill} {...skillObj} />
                                ))}
                        </div>
                </>
        )

}

export default SkillsDisplay