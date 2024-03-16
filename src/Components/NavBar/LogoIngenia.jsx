import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const LogoIngenia = () => {
	return (
		<div>
			{" "}
			<Link to={"/"} style={{ textDecoration: "none" }}>
				<Typography
					variant="h5"
					color={"primary"}
					sx={{ fontSize: "36px", fontWeight: "700"}}>
					Ingenia
				</Typography>
			</Link>
		</div>
	);
};
