import { useState } from "react"
import { motion } from "motion/react";

const DottedBorderBox = () => {
    const [xDirection, setXDirection] =useState(0);
    const [yDirection, setYDirection] =useState(0);
    const [rotate, setRotate] =useState(0);
  return (
    <div className="bg-white relative rounded-2xl h-full w-full border border-zinc-200 shadow-sm p-2">
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex items-center gap-2">
            <label htmlFor="x-direction">X:</label>
            <input className="w-20 lg:w-full accent-red-500"  type="range" name="x-direction" min={-100} max={100} placeholder="x" value={xDirection} onChange={(e)=>{setXDirection(parseInt(e.target.value))}}/>
        </div> 
        <div className="flex items-center gap-2">
            <label htmlFor="y-direction">Y:</label>
            <input className="w-20 lg:w-full accent-red-500" type="range" name="y-direction" min={-100} max={100} placeholder="y" value={yDirection} onChange={(e)=>{setYDirection(parseInt(e.target.value))}}/>
        </div>
        <div className="flex items-center gap-2">
            <label htmlFor="rotation">rotation:</label>
            <input className="w-20 lg:w-full accent-red-500" type="range" name="rotation" min={-180} max={180} placeholder="rotate" value={rotate} onChange={(e)=>{setRotate(parseInt(e.target.value))}}/>
        </div>
      </div>
      <motion.div
        initial={{x:0, y:0, rotate:0}} 
        animate={{x:xDirection, y:yDirection, rotate:rotate}}
        transition={{type:"spring", stiffness:100, damping:10}}
        className="border-4 h-20 w-20 border-dotted rounded-2xl absolute top-40 left-40 border-red-500 bg-red-300"></motion.div>
    </div>
  )
}

export default DottedBorderBox
