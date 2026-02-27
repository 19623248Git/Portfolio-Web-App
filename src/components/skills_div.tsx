import { motion } from "motion/react"
import { type Skill } from "../Skill_Display/skills/type"
import { useState } from "react"

// https://colorhunt.co/palette/fff7cdfdc3a1fb9b8ff57799


export function SkillDiv(skillObj: Skill){
        const [showGreen, setShowGreen] = useState(true)
        const [showRed, setShowRed] = useState(true)

        return(
                <div className="relative w-60 h-[100px]">
                        {showGreen && (
                                <motion.div
                                        initial={{ scaleX: 0, originX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        // transition={{ duration: 0.5, ease: "circInOut" }}
                                        transition={{duration: 0.5, ease: [.66,-0.02,.19,.92]}}
                                        style={{
                                                position: "absolute",
                                                width: "210px",
                                                height: "100px",
                                                backgroundColor: "#F57799",
                                                zIndex: 1
                                        }}
                                />
                        )}
                        {showRed && (
                                <motion.div
                                        initial={{ scaleX: 0, originX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        // transition={{ duration: 0.5, ease: "circInOut" }}
                                        transition={{duration: 0.5, ease: [.66,-0.02,.19,.92], delay: 0.2}}
                                        onAnimationComplete={() => setShowGreen(false)}
                                        style={{
                                                position: "absolute",
                                                width: "210px",
                                                height: "100px",
                                                backgroundColor: "#FDC3A1",
                                                zIndex: 2
                                        }}
                                />
                        )}

                        <motion.div
                                initial={{ scaleX: 0, originX: 0 }}
                                animate={{ scaleX: 1 }}
                                // transition={{ duration: 0.5, ease: "circInOut" }}
                                transition={{duration: 0.5, ease: [.66,-0.02,.19,.92], delay: 0.3}}
                                onAnimationComplete={() => setShowRed(false)}
                                style={{
                                        position: "absolute",
                                        width: "210px",
                                        height: "100px",
                                        background: "#242038",
                                        zIndex: 2
                                }}
                        >
                                
                                <div 
                                        className="flex flex-row justify-between items-center h-full gap-4"
                                        key={skillObj.skill}>
                                                <img src={`${skillObj.src}`} alt={skillObj.skill} className="w-[76px] h-[76px] object-fill ml-[10px]"/>
                                                <h1 className="mr-[15px] text-[#FF7EB6]">{skillObj.skill}</h1>
                                </div>

                        </motion.div>
                </div>
        )

}