import Challenge from "./components/Challenge"
import { challenges } from "./constants"

const App = () => {
  return (
    <main className="max-w-screen-xl mx-auto">
      <div className="px-6 py-10 flex flex-wrap justify-center gap-6">
        {challenges.map((challenge, index) => (
          <Challenge key={index} challenge={challenge} />
        ))}
      </div>
    </main>
  )
}

export default App
