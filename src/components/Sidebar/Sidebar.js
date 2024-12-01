import React from "react";
import riskhawk from '../../assets/riskhawk.png'
import direction from '../../assets/direction_arrow.png';
import "./Sidebar.css";
import { FaClipboardList, FaUsers, FaTools, FaGift, FaCogs, FaCubes } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
        <img src={riskhawk} alt="logo" />
      
      <nav>
        <ul>
          <li className="select_opt"><div><FaClipboardList /> Internal Audit</div> <img src={direction} alt="direction_arrow" className="icons"/></li>
          <li><FaClipboardList /> UAT Testing</li>
          <li className="select_opt"><div><FaClipboardList /> Intract</div> <img src={direction} alt="direction_arrow" className="icons"/></li>
          <li><FaUsers /> Queue</li>
          <li><FaCogs /> Workflow</li>
          <li><FaUsers /> Admin</li>
          <li><FaCubes /> Asset</li>
          <li><FaUsers /> Parent</li>
          <li><FaCogs /> Option One</li>
          <li><FaCogs /> Option Two</li>
          <li><FaTools /> All Accessories</li>
          <li className="select_opt"><div><FaClipboardList /> Internal Audit</div> <img src={direction} alt="direction_arrow" className="icons"/></li>
          <li className="select_opt"><div><FaClipboardList /> Decorating</div> <img src={direction} alt="direction_arrow" className="icons"/></li>
          <li><FaGift /> Presenting</li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
