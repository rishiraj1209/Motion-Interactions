import ArcInteraction from "./components/arcInteraction/ArcInteraction"
import BoxAnimation from "./components/boxAnimation/BoxAnimation"
import DottedBorderBox from "./components/dotted-border-box/DottedBorderBox"
import GestureAnimation from "./components/gestureAnimation/GestureAnimation"


const interactions = [
    {
    title: "Dotted Border Box",
    date: "03/06/2026",
    component: DottedBorderBox,
  },
  {
    title: "Box Animation",
    date: "04/06/2026",
    component: BoxAnimation,
  },
  {
    title: "Arc Animation",
    date: "09/06/2026",
    component: ArcInteraction,
  },
  {
    title: "Gesture Animation",
    date:"09/06/2026",
    component: GestureAnimation
  }
]


const App = () => {
  return (
    <div className="p-8 max-w-3xl lg:max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-4xl text-shadow-sm font-semibold text-neutral-700 mb-8">Interactions</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {interactions.map((interaction)=>{
          const Component = interaction.component;
          return(
            <div>
              <div className="h-100 w-full bg-zinc-300 rounded-2xl border-2 border-zinc-400 p-4 shadow-md">
                <Component/>
              </div>
              <p className="font-medium text-lg text-neutral-700 text-center">{interaction.title}</p>
              <p className="text-neutral-500 text-center">{interaction.date}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
