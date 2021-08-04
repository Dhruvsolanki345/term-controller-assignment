import "../css/Sidebar.css";
import logo from "../assets/images/logo.png";
import {
  MdHome,
  MdPeople,
  MdPayment,
  MdStar,
  MdArrowDropDown,
} from "react-icons/md";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <img className="sidebar_logo" src={logo} alt="Logo" />
        <p className="sidebar_title">
          Term<span>Monitor</span>
        </p>
      </div>
      <div className="sidebar_menu">
        <div className="sidebar_pages">
          <div className="sidebar_page active">
            <MdHome className="sidebar_PageIcon" />
            <span className="sidebar_pageTitle">Add kewyords</span>
          </div>
          <div className="sidebar_page">
            <MdPeople className="sidebar_PageIcon" />
            <span className="sidebar_pageTitle">Matches</span>
          </div>
          <div className="sidebar_page">
            <MdPayment className="sidebar_PageIcon" />
            <span className="sidebar_pageTitle">Manage sources</span>
          </div>
          <div className="sidebar_page">
            <MdPayment className="sidebar_PageIcon" />
            <span className="sidebar_pageTitle">Integration</span>
          </div>
          <div className="sidebar_page">
            <MdPayment className="sidebar_PageIcon" />
            <span className="sidebar_pageTitle">Alerts</span>
          </div>
        </div>
        <div className="sidebar_dropdown">
          <div className="sidebar_dropdownHeader">
            <MdStar className="sidebar_settingIcon" />
            <span className="sidebar_dropdownTitle">Settings</span>
            <MdArrowDropDown className="sidebar_dropdownIcon" />
          </div>
          <div className="sidebar_dropdownOptions">
              <span className="sidebar_dropdownOption">Billings</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
