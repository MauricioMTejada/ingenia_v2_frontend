import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export const SpaceFixedNavbar = () => {
	const navbarHeight = useSelector((state) => state.heightNavBar);

	// useEffect(() => {
	// 	console.log(navbarHeight);
	// }, [navbarHeight]);

	return (
		<div
			style={{
				display: "block",
				width: "100%",
				height: navbarHeight || "56px" ,
				backgroundColor: "#E53170",
			}}></div>
	);
};
