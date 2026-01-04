import Ss from "./Ss"
import "../Skills/Skills.css"
export default function Skill(){
    return(
        <div className="disskill" id="silambuskill">
            <h1 className="skillcolor"> techinical skills</h1>
            <div className="skillshow">
                {
                    Ss.map((value,index)=>(
                        <div className="skill" key={index}>
                            <img src={value.img} alt="" className="skillimg"/>
                            <h4 className="skillname">{value.skill}</h4>
                        </div>
                    ))
                }
            </div>


        </div>
    )
}