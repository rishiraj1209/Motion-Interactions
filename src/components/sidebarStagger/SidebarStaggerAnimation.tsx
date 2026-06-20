import { Menu } from "lucide-react";
import sidebarData from "./sidebarData"
import { motion } from "motion/react";
import { useState } from "react";

const SidebarStaggerAnimation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarVariants = {
        visible:{width:"200px",height:"320px"},
        hidden:{width:"40px",height:"40px"}
    }

    const childVariants = {
        visible:{
            opacity:1,
            y:0,
        },
        hidden:{
            opacity:0,
            y:-10
        }
    }

    const parentVariants={
        visible:{
            transition:{staggerChildren:0.05, delayChildren:0.2},
        },
        hidden:{
            transition:{staggerChildren:0.01,staggerDirection:-1}
        }
    }

    

    
  return (
    <motion.div initial={false} animate={isOpen?"visible":"hidden"} exit="hidden" transition={{duration:0.5}} className="w-full h-full bg-white rounded-2xl shadow-md p-4">
        <motion.div variants={sidebarVariants} className="h-full w-full rounded-sm bg-neutral-100 p-2 overflow-hidden">
            <div className="mb-8 flex items-center justify-between">
                {isOpen && <p>Sidebar</p>}
                <motion.button className="cursor-pointer" aria-label="button" onClick={()=>{setIsOpen(!isOpen)}}><Menu /></motion.button>
            </div>
            <motion.ul variants={parentVariants} className="flex flex-col gap-4">
                {sidebarData.map((data)=>{
                    const Icon = data.icon;
                    return (
                        <motion.li variants={childVariants} className="flex items-center gap-1 text-neutral-700 text-sm">
                            <span><Icon size={20}/></span>
                            {isOpen && <p>{data.label}</p>}
                        </motion.li>
                    )
                })}
            </motion.ul>
        </motion.div>
        
    </motion.div>
  )
}

export default SidebarStaggerAnimation
