import reactLogo from './assets/react.svg'
import { Example } from './components/Example'

function App() {
  return (
    <>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <div>
        Project on React
      </div>
      <Example />
    </>
  )
}

export default App
