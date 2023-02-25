import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-12">
      <p className="text-purple-600">Hello</p>
      <Button 
        title="Botão"
      />
    </div>
  )
}

export default App
