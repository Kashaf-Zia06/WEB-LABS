import {useState } from 'react'

function App() {

  // const [show, setShow] = useState(true)
  const [color,setColor]=useState("rgb(255, 255,255 )")
  // function toggleButton() {
  //   setShow(!show)
  // }

  function Changebg() {
    const newColor1=(Math.random()*256) 
    const newColor2=(Math.random()*256) 
    const newColor3=(Math.random()*256) 
    setColor(`rgb(${newColor1}, ${newColor2}, ${newColor3})`)

  }
  return (
    <>
    <div 
    style={{ backgroundColor: color }}  
    className={`flex flex-col items-center justify-center h-screen bg-${color}`}>

      {/* <button
        onClick={toggleButton}
        className="px-6 py-2 hover:cursor-pointer bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        {show ? 'Hide Text' : 'Show Text'}
      </button>

      {show && (
        <p className="mt-6 text-lg text-gray-700 bg-white px-4 py-2 rounded shadow">
          This text will appear or hide on your click
        </p>
      )} */}


      <button onClick={Changebg} className='bg-black text-white rounded-2xl transition duration-600 p-6 hover:cursor-pointer'>
        Change background Color
      </button>

    </div>
    </>
  )
}

export default App