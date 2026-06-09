import { Helicopter } from "lucide-react"
import { arc, motion } from "motion/react"
const ArcInteraction = () => {
  return (
    <div className="bg-white rounded-2xl h-full w-full border border-zinc-200 shadow-sm p-2 overflow-hidden flex items-center">
        <motion.div
            animate={{
                x: [0, 200,400],
                y: [0, 100,-100],
                
            }}
            transition={{duration:4, path: arc({strength:1.2, peak:1,direction:'ccw',rotate:true}),repeat:Infinity}}
            
        >
            <Helicopter className="size-16 text-neutral-500"/>
        </motion.div>
    </div>
  )
}

export default ArcInteraction
