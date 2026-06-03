import DottedBorderBox from "./components/dotted-border-box/DottedBorderBox"


const App = () => {
  return (
    <div className="p-8 max-w-3xl lg:max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-4xl text-shadow-sm font-semibold text-neutral-700 mb-8">Interactions</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="h-100 w-full bg-zinc-300 rounded-2xl border-2 border-zinc-400 p-4 shadow-md">
            <DottedBorderBox/>
          </div>
          <p className="font-medium text-lg text-neutral-700 text-center">Dotted Border Box</p>
          <p className="text-neutral-500 text-center">03/06/2026</p>
        </div>
        
      </div>
    </div>
  )
}

export default App
