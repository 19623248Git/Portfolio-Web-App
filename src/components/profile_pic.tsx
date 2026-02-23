import { motion } from "motion/react"
import { useState } from "react";

export default function ProfilePicStyled(){

        const [isRevealed, setIsRevealed] = useState(false);

        return(
                <div className="relative w-[292px] h-[292px]">
                        <motion.img
                                src="profile.jpg"
                                alt="profile_picture"
                                className="absolute inset-0 rounded-full z-10"
                                width={292}
                                height={292}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isRevealed ? 1 : 0 }}
                                transition={{ duration: 0.005 }}
                        />
                        <motion.div
                                className="absolute inset-0 bg-white rounded-full z-0 w-[292px] h-[292px]"
                                initial={{ opacity: 1}}
                                animate={{
                                        opacity: [1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1]
                                }}
                                transition={{
                                        duration: 1,
                                        times: [0, 0.399, 0.4, 0.499, 0.5, 0.599, 0.6, 0.699, 0.7, 0.799, 0.8, 0.899, 0.9, 1],
                                        ease: "linear",
                                }}
                                onAnimationComplete={() => setIsRevealed(true)}
                                
                        />
                </div>
        )
}