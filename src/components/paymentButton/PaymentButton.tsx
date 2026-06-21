import { useAnimate, motion} from "motion/react"

const PaymentButton = () => {
    const [scope, animate]= useAnimate();
    const sequences= [
        [".lucide-loader-circle",{opacity:[0,1]},{duration:0.1}],
        [".lucide-loader-circle",{rotate:360*4},{duration:1.5}],
        [".lucide-loader-circle",{opacity:[1,0]},{duration:0.1}],
        ["span",{opacity:0},{duration:0.2}],
        ["button",{width:"4rem",borderRadius:"2000px"},{duration:0.3}],
        ["button",{scale:[1,1.2,0.8,1],backgroundImage:"linear-gradient(to right,#00ff99,#00ccff)"},{duration:0.3,ease:"easeInOut"}],
        [".lucide-check-icon",{opacity:[0,1]},{duration:0.1}],
        [".lucide-check-icon path",{pathLength:1},{duration:0.3}]
    ] as const;

    const startAnimating = async ()=>{
        await animate(sequences as any);
    }
  return (
    <div ref={scope} className="w-full h-full bg-white rounded-2xl shadow-md flex items-center justify-center">
      <motion.button onClick={startAnimating} style={{width:"20rem"}} className="relative border rounded-lg h-15 text-white font-medium text-lg bg-linear-to-r from-purple-400 to-purple-600 flex items-center justify-center">
        <motion.span>Purchase Now ($169)</motion.span>
        <motion.svg xmlns="http://www.w3.org/2000/svg" style={{opacity:0}} width="24"  height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-loader-circle-icon lucide-loader-circle absolute top-4 left-4"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></motion.svg>
        <motion.svg style={{opacity:0}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.0" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check-icon lucide-check absolute"><motion.path initial={{pathLength:0}} transition={{duration:0.3,type:'tween', ease:'easeInOut'}} d="M20 6 9 17l-5-5"/></motion.svg>
      </motion.button>
    </div>
  )
}

export default PaymentButton
