import { SocialIcon } from 'react-social-icons/component';

import { type Social } from './socials/type';

import socialsData from './socials/data.json';

//  social icons import idfk
//  oh yeah add this manually lmfao
import 'react-social-icons/linkedin';
import 'react-social-icons/github';
import 'react-social-icons/email';

const socials = socialsData as Social[];

export default function SocialDisplay(){
        return(
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
        ) 
}