import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState("bg-white"); //State containing Background Color
  const [textColor, setTextColor] = useState("text-white"); //State containing Text Color
  const [bgColorName, setBgColorName] = useState("white"); //State containing color name

  //Function to change color
  const handleColorChange = (colorCode, textColor, colorName) => {
    setBgColor(colorCode);
    setTextColor(textColor);
    setBgColorName(colorName);
  }
  return (
    <div className={`relative h-screen w-full ${bgColor}`}>
      <div className='p-32 space-y-4 text-center text-8xl font-bold'>
      <p className={`text-gray-950`}>Your background is</p>
      <p className={`bg-gray-950 ${textColor} uppercase py-1`}>{bgColorName}</p>
      </div>
      <div className='absolute w-full bottom-10 flex justify-center'>
        <div className='pt-4 border rounded-lg divide-y bg-gray-200'>
          <p className='text-center text-gray-950 font-medium pb-3'>Click to change background</p>
          <div className='flex justify-center items-center space-x-8 p-5 bg-white rounded-md'>
            <div className='w-16 h-16 hover:scale-105 rounded-full bg-purple-600 cursor-pointer' onClick={() => handleColorChange("bg-purple-600", "text-purple-600", "purple")}></div>
            <div className='w-16 h-16 hover:scale-105 rounded-full bg-indigo-600 cursor-pointer' onClick={() => handleColorChange("bg-indigo-600", "text-indigo-600", "indigo")}></div>
            <div className='w-16 h-16 hover:scale-105 rounded-full bg-amber-600 cursor-pointer' onClick={() => handleColorChange("bg-amber-600", "text-amber-600",  "amber")}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
