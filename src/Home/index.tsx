import { SocialIcon } from 'react-social-icons/component'

//  data from json
import socialsData from './socials/data.json'
import skillsData from './skills/data.json'

//  social icons import idfk
//  oh yeah add this manually lmfao
import 'react-social-icons/linkedin'
import 'react-social-icons/github'
import 'react-social-icons/email'

// Type interface import
import { type Social } from './socials/type'
import { type Skill } from './skills/type'

// Import skills display
import SkillsDisplay from './Skill_Display'


const socials = socialsData as Social[];
const skills = skillsData as Skill[];

function Home(){

        console.log(skills);

        return (
                <>      
                        {/* Header div */}
                        <div>
                                <h2>Hello! My name is Jovi</h2>
                                <h1>Software Developer</h1>
                                <img src='tetorizer.jpg' alt='profile_picture'/>
                        </div>

                        {/* Status div */}
                        <div>
                                <h1>STATUS</h1>
                                <h2><strong>Looking for internship</strong>, please contact me through my socials!</h2>
                        </div>

                        {/* Socials div */}
                        <div>
                                {socials.map((social) =>(
                                        <SocialIcon
                                                key={social.icon}
                                                network={social.icon}
                                                url={social.url}
                                                target='_blank'
                                                rel="noopener noreferrer" 
                                        />
                                ))}
                        </div>

                        {/* Skills div */}
                        <div>
                                <SkillsDisplay skills={skills}/>
                        </div>
                </>
        )

}

export default Home;