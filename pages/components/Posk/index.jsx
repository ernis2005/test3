import React from 'react'
import s from "./style.module.scss";
const Posk = ({setPosk,posk}) => {
  return (
    <div  className={s.block}>
        <button onClick={()=>setPosk(!posk)}>х</button>
        <input type="text" className={s.info2_input} list="test" />
          <datalist id="test">
      
                <option  value="Lorem ipsum dolor sit."></option>
                
                <option  value="Lorem ipsum  sit."></option>
                <option  value="Lorem sit."></option>

          </datalist>
    </div>
  )
}

export default Posk
