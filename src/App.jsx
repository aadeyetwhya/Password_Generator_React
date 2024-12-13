import { useCallback, useState,useEffect,useRef } from 'react'

import './App.css'

function App() {

  const [inputFieldPassword, setInputFieldPassword] = useState("")
  const [length, setLength] = useState(6);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeSpCharater, setIncludeSpCharater] = useState(false);
  const refValue=useRef(null);

  const passwordGenerator = () => {
    console.log(includeNumber)
    let str = "ABCDEFGHIJPLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let password = ""
    if (includeNumber) {
      str = str + "0123456789"
    }
    if (includeSpCharater) {
      str = str + "!@#$%^&*()_+";
    }
    for (let i = 0; i < length; i++) {
      let randomLetter = str[Math.floor(Math.random() * (str.length - 1))]
      password += randomLetter;

    }
    setInputFieldPassword(password)
  }

  const copyClipboard=()=>{
    refValue.current.select();
    navigator.clipboard.writeText(inputFieldPassword)  }



  useEffect(() => {
    passwordGenerator(); // Trigger password generation whenever state changes
  },[length, includeNumber, includeSpCharater])



return (
  <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center p-4 space-y-8">

    {/* Textbox with Copy Button */}
    <div className="flex items-center space-x-4">
      <input
        type="text"
        placeholder="Some text here"
        className="w-96 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={inputFieldPassword} readOnly ref={refValue}
      />
      <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-blue-600 focus:outline-none"  onClick={copyClipboard}>
        Copy
      </button>
    </div>

    {/* Range Slider */}
    <div className="flex flex-col items-center space-y-2">
      <input
        id="range-slider"
        type="range"
        min={6}
        max={100}
        className="w-64"
        defaultValue={6}
        onChange={
          (e)=>{
            setLength(e.target.value);

         
          }
        }
      />
      <label htmlFor="range-slider" className="text-white text-xl">Length: {length}</label>
    </div>

    {/* Checkboxes */}
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <input type="checkbox" id="checkbox1" className="w-6 h-6 text-blue-500" onChange={() => {
          setIncludeNumber((prev)=>!prev);

        }} />
        <label htmlFor="checkbox1" className="text-white" >Include Number</label>
      </div>
      <div className="flex items-center space-x-2">
        <input type="checkbox" id="checkbox2" className="w-6 h-6 text-blue-500"  onChange={() => {
          setIncludeSpCharater((prev)=>!prev);

        }}/>
        <label htmlFor="checkbox2" className="text-white">Include Sp Charater</label>
      </div>
    </div>

  </div>
)
}

export default App
