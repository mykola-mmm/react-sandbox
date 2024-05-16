import './App.css'
import Button from './components/ui/button/Button'

function App() {
  return (
    <>
    <div className="header">
      <div className='flex  justify-center p-4'>
        <Button variant="primary" className=" bg-red-800">Click Me</Button>
      </div>
    </div>
    <div className="footer bg-red-100 h-64">

    </div>
    </>
  )
}

export default App
