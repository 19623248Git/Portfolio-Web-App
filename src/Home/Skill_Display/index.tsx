import { type Skill } from "../skills/type"

interface Props{
        skills: Skill[]
}

function SkillsDisplay(p: Props){

        return(
                <>
                        <div>
                                {p.skills.map((skillObj) => (
                                        <div key={skillObj.skill}>
                                                <img src={`${skillObj.src}`} alt={skillObj.skill} width={76} height={76}/>
                                                <p>{skillObj.skill}</p>
                                        </div>
                                ))}
                        </div>    
                </>
        )

}

export default SkillsDisplay