import { SocialIcon } from 'react-social-icons/component'

//  data from json
import socialsData from './socials/data.json'

//  social icons import idfk
//  oh yeah add this manually lmfao
import 'react-social-icons/linkedin'
import 'react-social-icons/github'
import 'react-social-icons/email'

type platforms = 'linkedin' | 'github' | 'email' | 'twitter' | 'patreon' | 'discord';

interface Social {
  url: string;
  icon: platforms;
}

const socials = socialsData as Social[];

function Home(){

        return (
                <>      
                        {/* Header div */}
                        <div>
                                <h2>Hello! My name is Jovi</h2>
                                <h1>Software Developer</h1>
                                {/* image div don't forget! */}
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

                </>
        )

}

export default Home;