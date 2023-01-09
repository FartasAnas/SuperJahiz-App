import React, { useState } from 'react'
import './QuantityInput.css'
function QuantityInput(props, target) {
    const [count,setCount] = useState(props.initial)

    function setCount2(count,target){
        if(count<1||count>100) target.value = count
        console.log(target?.value)
        if(target?.value === "NaN") target.value = 0
        setCount(count);
        props?.setCount(count,props.id);
        
    }
  return (
    <div className='QuantityInput' style={{border: `1px solid ${(count<1||count>100)?"red":"#a0a3b0"}`}}>
        <button className="QuantityInput-minus" style={{color:`${count<=1?"#A0A3B0":"black"}`}} onClick={()=>{count>1?setCount2(count-1):setCount2(count)}}>-</button>
        <input className="QuantityInput-value" value={count} type='number' min={1} max={100} onChange={(e)=>{setCount2(parseInt(e.target.value,e.target))}}></input>
        <button className="QuantityInput-plus" style={{color:`${count>=100?"#A0A3B0":"black"}`}} onClick={()=>{count<100?setCount2(count+1):setCount2(count)}}>+</button>
    </div>
  )
}

export default QuantityInput