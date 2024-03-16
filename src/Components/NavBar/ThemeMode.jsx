import { Box, IconButton, Tooltip } from '@mui/material';
import React from 'react';
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
// import { Box, IconButton, Tooltip } from '@material-ui/core';
// import DarkModeIcon from '@material-ui/icons/DarkMode';
// import LightModeIcon from '@material-ui/icons/LightMode';

const ThemeMode = ({ theme, colorMode }) => {
    return (
        <Box sx={{ justifyContent: "center", color: "text.primary", marginX: "0.5rem" }}>
            <IconButton sx={{ ml: 0 }} onClick={colorMode.toggleColorMode} color="primary">
                <Tooltip title="Dark / Light" placement="top">
                    <div style={{ width: "24px", height: "24px" }}>
                        {theme.palette.mode === "dark" ? (
                            <DarkModeIcon color="primary" />
                        ) : (
                            <LightModeIcon color="primary" />
                        )}
                    </div>
                </Tooltip>
            </IconButton>
        </Box>
    );
};

export default ThemeMode;
