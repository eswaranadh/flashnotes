import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi"
import { BiHomeAlt } from "react-icons/bi"
import { CgNotes } from "react-icons/cg"
import { TbCards } from "react-icons/tb"
import { useNavigate } from "react-router-dom";
import UserDropdown from "./UserDropdown";

function Navbar() {
  const navigate = useNavigate()
  return (
    <>
      <nav className="top-nav">
        <div className="top-nav-brand">
          <h3 className="top-nav-brand-title">My App</h3>
        </div>
        <div className="top-nav-user">
          <UserDropdown />
        </div>
      </nav>
      <nav className="side-nav">
        <div className="side-nav-header">
          <h3 className="side-nav-header-title">Flash Notes</h3>
        </div>
        <div className="side-nav-content">
          <ul className="side-nav-list">
            <li className="side-nav-item">
              <span onClick={() => navigate("/home")} className="side-nav-link">
                <BiHomeAlt className="side-nav-icon" />
                <span className="side-nav-text">Home</span>
              </span>
            </li>
            <li className="side-nav-item">
              <span onClick={() => navigate("/notes")} className="side-nav-link">
                <CgNotes className="side-nav-icon" />
                <span className="side-nav-text">Notes</span>
              </span>
            </li>
            <li className="side-nav-item">
              <span onClick={() => navigate("/flashcards")} className="side-nav-link">
                <TbCards className="side-nav-icon" />
                <span className="side-nav-text">Flashcards</span>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
