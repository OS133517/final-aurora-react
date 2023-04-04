import { useDispatch } from "react-redux";
import { useState } from "react";
import SidebarCSS from "./SubSidebar.module.css";
import { NavLink } from "react-router-dom";

function ScheduleSidebar() {

    const dispatch = useDispatch();

    // 드롭다운 메뉴 조정용
    const [firstIsOpen, setFirstIsOpen] = useState(false);
    const [secondIsOpen, setSecondIsOpen] = useState(false);
    const [thirdIsOpen, setThirdIsOpen] = useState(false);

    const toggleMenu = (menuNum) => {
        switch(menuNum) {
            case 1: 
                setFirstIsOpen(!firstIsOpen);
                break;
            case 2: 
                setSecondIsOpen(!secondIsOpen); 
                break;
            case 3:
                setThirdIsOpen(!thirdIsOpen);
                break;
            default: break;
        };
    }

    const activeStyle = {
        backgroundColor : "#73b8a3",
        color : "white"
    };

    return (
        <>
            <div className={SidebarCSS.sidebarDiv}>
                <div className={SidebarCSS.sideHeader}>
                    <span>일정관리</span>
                </div>
                <div>
                    {/* <button className={SidebarCSS.buttons} onClick={() => setScheduleModal(true)}>일정 추가</button> */}
                    <button className={SidebarCSS.dropDownButtons} onClick={() => toggleMenu(1)}>
                        <img 
                            className={SidebarCSS.dropDownArrow} 
                            style={firstIsOpen? {transform:`rotate(90deg)`}:{}} 
                            src={process.env.PUBLIC_URL + "/arrow.png"} 
                            alt="화살표"/>나의 캘린더
                    </button>
                    {firstIsOpen && (
                        <div className={SidebarCSS.dropDownMenus}>
                        <NavLink 
                            style = { ({ isActive }) => isActive? activeStyle : undefined }
                            to={"/aurora/calendar/month"}
                            >월간</NavLink>
                        <NavLink 
                            style = { ({ isActive }) => isActive? activeStyle : undefined }
                            to={"/aurora/calendar/week"}
                            >주간</NavLink>
                        <NavLink 
                            style = { ({ isActive }) => isActive? activeStyle : undefined }
                            to={"/aurora/calendar/day"}
                            >일간</NavLink>
                        </div>
                    )}
                </div>
            </div>
        
        </>
       
    );
}

export default ScheduleSidebar;