import React from 'react'
import { useNavigate } from "react-router-dom";
export function Landing  () {
    const navigate =useNavigate()
  return (
 <>
 <div>Landing</div>
 <button onClick = {() => navigate('/ViewA')}>Continuar </button>
</>
  )
}

export default {Landing}