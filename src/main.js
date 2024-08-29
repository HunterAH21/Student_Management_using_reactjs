import pawn from "./icons/R_student.png";
import sms from "./icons/SMS.png"
import document from "./icons/documents.png"
import employee from "./icons/classroom.png"
import club from "./icons/club.png"
import user from "./icons/user.png"
import att from "./icons/hospital.png"
import { useState } from "react"

function Main(){
    const [regular,setRegular] = useState(26);
    const [reme,setReme] = useState(10);
    const [paid,setPaid] = useState("14");
    return(
        <>
        <div className="contain">
            <div className="na">
                <p className="manage">Student Management</p>
            </div>
            <div className="body">
                <div className="upper">
                    <div className="blocko">
                        <img src={pawn} alt="que" className="regular"></img>
                        <div>
                            <p className="number">{regular}</p>
                             <p className="describr">Regular Students</p>
                        </div>
                    </div>
                    <div className="blockt">
                    <img src={pawn} alt="que" className="regular"></img>
                    <div>
                        <p className="number">{reme}</p>
                        <p className="describr">Remedial Students</p>
                    </div>
                </div>
                <div className="blockth">
                <img src={pawn} alt="que" className="regular"></img>
                    <div>
                        <p className="number">{paid}</p>
                        <p className="describr">in Paid Clubs</p>
                    </div>
                </div>
            </div>
                <div className="things">
                    <p className="menu">Menu</p>
                        <div className="grid">
                        <div className="little">
                        <img src = {user} alt="value" className="hari"></img>
                        <p>Regular Enrollment</p>
                    </div>
                    <div className="little">
                        <img src = {document} alt="value" className="hari"></img>
                        <p>Remedial Enrollment</p>
                    </div>
                    <div className="little">
                        <img src = {club} alt="value" className="hari"></img>
                        <p>Club Management</p>
                    </div>
                    <div className="little">
                        <img src = {employee} alt="value" className="hari"></img>
                        <p>Classroom Management</p>
                    </div>
                    <div className="little">
                        <img src = {sms} alt="value" className="hari"></img>
                        <p>SMS/mail</p>
                    </div>
                    <div className="little">
                        <img src = {att} alt="value" className="hari"></img>
                        <p>Clinic</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Main