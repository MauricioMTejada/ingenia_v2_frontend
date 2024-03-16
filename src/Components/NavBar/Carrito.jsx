import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Box, IconButton, Tooltip } from "@mui/material";
// import { NavLink } from 'react-router-dom';
import { NavLink, Link } from "react-router-dom";

const Carrito = ({ userType, cartCourses }) => {
	return (
		<div style={{ margin: "0 0.5rem" }}>
			<Box>
				<Link to="/Carrito">
					<IconButton
						color="primary"
						aria-label="upload picture"
						component="label">
						<Badge badgeContent={cartCourses} color="secondary">
							<Tooltip title="Carrito" placement="top">
								<ShoppingCartIcon />
							</Tooltip>
						</Badge>
					</IconButton>
				</Link>
			</Box>
		</div>
	);
};

export default Carrito;
