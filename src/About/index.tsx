export default function AboutMe(){
        return(
                <div className="flex flex-col px-8 gap-2 md:px-12 md:pt-4">
                
                                <h1 className="text-[#72f1b8] text-3xl">
                                        ABOUT ME
                                </h1>
                                <h3 className="text-[#fede5d] text-justify">
                                        Ambitious and passionate in improving myself becoming an expert on my interests.  
                                        Currently studying in ITB trying to get my computer science degree while pursuing 
                                        CyberSecurity and System Software Engineering specialization
                                </h3>
                                <h2 className="text-[#ff7edb] text-2xl pt-10">
                                        INTERESTS
                                </h2>
                                <ul className="text-[#36f9f6] list-disc list-inside">
                                        <li>
                                                Software Engineering
                                        </li>
                                        <li>
                                                System Engineering
                                        </li>
                                        <li>
                                                DevOps
                                        </li>
                                        <li>
                                                Pentesting (red team)
                                        </li>
                                </ul>
                        
                </div>
        )
}