import React from 'react';

import { NavLink } from 'react-router-dom';
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Badge, Box, IconButton, Tooltip } from '@mui/material';

const Favoritos = ({ tabSet, favoriteLength }) => {
    return (
        <Box sx={{ margin: "0 3rem 0 0.5rem" }}>
            <NavLink to={"/MyCourses"} onClick={() => tabSet(1)}>
                <Badge badgeContent={favoriteLength} color="secondary">
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <Tooltip title="Favoritos" placement="top">
                            <FavoriteIcon />
                        </Tooltip>
                    </IconButton>
                </Badge>
            </NavLink>
        </Box>
    );
};

export default Favoritos;
