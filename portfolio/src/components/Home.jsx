import style from "./Home.module.css"
import profile from "../assests/profile.jpeg"


export const Home=()=>{
    return <div className={`${style.home}`}>
        {/* <div className={style.profile}>
            <img src={profile} alt="profile image"/>
        </div> */}
        
        <div>
            <h1 className="bg-red" >My name is Ashwani Kumar</h1>
        </div>
        <div className={style.profile}>
            <img src={profile} alt="profile image"/>
        </div>
        
        
    </div>
}