import logo from "./icons/haris_logo_white.png"
import bishop from "./icons/attendance.png"
import rook from "./icons/Quality.png"
import queen from "./icons/graduated.png"
import pawn from "./icons/exit.png"
import pawno from "./icons/info.png"
import pawnt from "./icons/settings.png"
import knight from "./icons/Report.png"


function Nav(){
    return(
        <div className="nav">
            <img src={logo} alt="logo" className="logo" ></img>
            <div className="sect">
                <img src={queen} alt="knight" className="item"></img>
                <p>Student Management</p>
            </div>
            <div className="sect">
                <img src={rook} alt="knight" className="item"></img>
                <p>Quality Control</p>
            </div>
            <div className="sect">
                <img src={knight} alt="knight" className="item"></img>
                <p>Report</p>
            </div>
            <div className="sect">
                <img src={bishop} alt="knight" className="item"></img>
                <p>Attendance</p>
            </div>
            <div className="minion">
                <img src={pawn} className="small"></img>
                <img src={pawno} className="small"></img>
                <img src={pawnt} className="small"></img>
            </div>
        </div>
    )
}

export default Nav;
