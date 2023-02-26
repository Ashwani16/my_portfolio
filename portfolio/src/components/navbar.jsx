import { useState } from "react"
import "../index.css"
//import style from "./navbar.module.css"
export const Navbar=()=>{
    const style={}
    const [show,setShow]=useState(false)
    const [mode,setmode]=useState(true)
    return <><div className={`${style.navbar}`} >
        <div className={`${style.name}`}>
            <p>Ashwani Kumar</p>
        </div>
        <div className={`${style.bars}`}>
            <div className="bg-red" > <p>Home</p> </div>
            <div className={`${mode ?style.modeL:style.modeD}`} > <p> About       </p></div>
            <div className={`${mode ?style.modeL:style.modeD}`} > <p> Skills     </p></div>
            <div className={`${mode ?style.modeL:style.modeD}`} > <p> Projects   </p></div>
            <div className={`${mode ?style.modeL:style.modeD}`} > <p> Contact     </p></div>
            <div className={`${mode ?style.modeL:style.modeD}`} > <p> Change Theme</p></div>
        </div>
        
        <div className={`${style.menu}`}>
            <button onClick={()=>{setShow((pre)=>!pre)}}>%</button>
        </div>
        
    </div>
    {show&&
        <div className={`${style.showbar}`}>
            <div className={``}> <p>Home</p> </div>
            <div> <p> About       </p></div>
            <div> <p> Skills     </p></div>
            <div> <p> Projects   </p></div>
            <div> <p> Contact     </p></div>
            <div> <p> Change Theme</p></div>
        </div>
            }
    </>
}