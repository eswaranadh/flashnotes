import React, { useState } from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { useAuthContext } from '../../context/authContext';
import './UserMenu.css'; // Import CSS file

function UserMenu() {
    const [showMenu, setShowMenu] = useState(false);
    const { handlers } = useAuthContext()

    const handleClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="user-menu-container">
            <div className="user-menu-icon" onClick={handleClick}>
                <HiOutlineUserCircle fontSize={40} />
            </div>
            {showMenu && (
                <div className="user-menu-dropdown">
                    <div className="user-menu-header">
                        <HiOutlineUserCircle fontSize={40} />
                        <h5 className="user-menu-name">John Doe</h5>
                    </div>
                    <div className="user-menu-options">
                        <a href="#" className="user-menu-option">
                            My Profile
                        </a>
                        <a href="#" className="user-menu-option">
                            Settings
                        </a>
                        <span onClick={handlers.handleLogout} className="user-menu-option">
                            Logout
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserMenu;
