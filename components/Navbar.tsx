import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/material";

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}> {/* Change background color */}
            <Toolbar>


                {/* Logo aligned to right */}
                <Box sx={{ flexGrow: 1 }} /> {/* Pushes logo to right */}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFkStKp9DxR7p8nBCepPO26OLXvfaExhUu1A&s" alt="Logo" style={{ height: "40px" }} />
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
