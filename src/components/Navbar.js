import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from "@mui/material";

function Navbar() {
  return (
    <nav class="navbar">
      <div class="navbar-logo">
        <a href="#">Logo</a>
      </div>
      <ul class="navbar-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div class="navbar-user">
        <a href="#" class="user-icon"><i class="fas fa-user"></i></a>
        <div class="user-dropdown">
          <ul>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
