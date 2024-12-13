import React, { useState, useRef,useEffect } from 'react';

export default function Test() {
    const [count, setCount] = useState(0);
    const prevCount = useRef(); // Store previous count without causing re-renders
  
    
      useEffect(()=>{
        prevCount.current=count;
      },[count])
    
  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCount.current}</p>
      <button onClick={()=>setCount((prev)=>prev+1)} style={{backgroundColor:'black',color:'white'}}>Increment</button>
    </div>
  )



}
 