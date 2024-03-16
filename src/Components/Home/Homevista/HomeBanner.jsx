import React from "react";
import styled from "./Home.module.css";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";

export const HomeBanner = () => {
	return (
		<div className={styled.bannerContent}>
			{Number(localStorage.getItem("userType")) === 0 && (
				<div className={styled.bannerItem}>
					<NavLink to={"/LandingSeller"} style={{ textDecoration: "none" }}>
						<Typography
							variant="h6"
							sx={{
								marginTop: 1,
								color: "#FFFFFE",
								display: "flex",
								justifyContent: "center",
							}}>
							¡Vende con nosotros! - Registrate aquí
						</Typography>
					</NavLink>
				</div>
			)}
		</div>
	);
};
