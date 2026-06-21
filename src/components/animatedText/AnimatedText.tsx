import { motion, stagger, useAnimate } from "motion/react"

const text = "Developed a collection of interactive UI components and micro-interactions using React, Tailwind CSS, and Motion. Implemented smooth animations, hover effects, layout transitions, animated navigation, modals, and loading states to enhance user experience, improve visual feedback, and create modern, engaging, and responsive web interfaces."
const AnimatedText = () => {
    const [scope, animate] = useAnimate();

    const startAnimating = ()=>{
        animate("span",{opacity:1, y:0, filter:'blur(0px)'},{duration:0.5, ease:"easeInOut",delay:stagger(0.02)})
    }
  return (
    <div ref={scope} className="bg-white h-full w-full rounded-2xl py-4 px-8 flex flex-wrap items-center text-lg font-medium text-shadow-sm overflow-hidden">
        <button onClick={startAnimating} className="bg-zinc-200 px-4 py-1 rounded-md text-base font-normal shadow-sm active:scale-95 transition-all duration-300 cursor-pointer">Start Animating</button>
        {text.split(" ").map((word, index)=>
            <motion.span style={{opacity:0, filter:'blur(10px)', y:20, display:"inline-block"}} key={word+index}>{word} &nbsp;</motion.span>
        )}
    </div>
  )
}

export default AnimatedText
