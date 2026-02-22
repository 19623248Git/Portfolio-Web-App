import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect } from "react";

interface TypewriterProps {
  text: string;
  speed?: number; // Time per character in seconds
  className?: string;
}

export const Typewriter = ({ text, speed = 0.05, className }: TypewriterProps) => {

        const count = useMotionValue(0);

        const rounded = useTransform(count, (latest) => Math.round(latest));

        const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

        useEffect(() => {
                const controls = animate(count, text.length, {
                        type: "tween",
                        duration: text.length * speed,
                        ease: "linear",
                });


                return controls.stop;
                
        }, [count, text.length, speed]);

        return (

                <motion.span className={className}>
                        {displayText}
                </motion.span>
        );
};