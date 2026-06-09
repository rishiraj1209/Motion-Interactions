import { motion } from "motion/react"

const GestureAnimation = () => {
  return (
    <div className="bg-white h-full w-full shadow-md rounded-2xl flex items-center justify-center">
      <motion.button
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        whileHover={{backgroundColor:"violet", scale:1.2}}
        whileTap={{backgroundColor:"violet",scale:0.8}}
        transition={{type:'spring', stiffness:250 ,damping:15}}
        className="px-4 py-2 rounded-lg border-2 border-zinc-200 text-white bg-neutral-500 cursor-pointer"
      >
        click Me
      </motion.button>
    </div>
  )
}

export default GestureAnimation
