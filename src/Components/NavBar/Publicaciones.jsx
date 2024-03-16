import React from "react";
import { NavLink } from "react-router-dom";

export const Publicaciones = ({ userType }) => {
	return (
		<div style={{ margin: "0 2rem" }}>
			<NavLink
				style={{
					textDecoration: "none",
					color: "#FF8906",
					fontSize: "20px",
				}}
				to={"/postCourse"}>
				<p style={{ margin: "0" }}>Publicaciones</p>
			</NavLink>
		</div>
	);
};
