import { motion } from "motion/react"

const BoxAnimation = () => {
  return (
    <div className="bg-white rounded-2xl h-full w-full border border-zinc-200 shadow-sm p-2 overflow-hidden flex items-center justify-center">
      <motion.div
        initial={{scale:1, rotate:0, borderRadius:"0%"}}
        animate={{
            scale:[1,1.8,1.8,1,1],
            rotate:[0,0,180,180,0],
            borderRadius:["0%","0%","50%","50%","0%"]
        }}
        transition={{duration:2,repeat:Infinity, repeatDelay:1 }}
        className="bg-slate-500 rounded-lg h-30 w-30 shadow-sm">

      </motion.div>
    </div>
  )
}

export default BoxAnimation
