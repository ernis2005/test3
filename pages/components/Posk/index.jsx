import React from 'react'
import s from "./style.module.scss";
const Posk = ({setPosk,posk}) => {
  return (
    <div  className={s.block}>
        <button onClick={()=>setPosk(!posk)}>asda</button>
     <h1>efas</h1>
    </div>
  )
}

export default Posk
