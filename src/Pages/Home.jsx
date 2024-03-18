import React from "react";
import HomeComponent from "../Components/Home/Homevista/Home";
import NotificationSnackbar from "../Components/NotificationSnackbar/NotificationSnackbar";
import { Stack } from "@mui/material";

export default function Home() {
	return (
		<div
			className="style-home"
			style={{
				alignItems:"center",
				justifyContent:"center"
			}}
		>
			{/* <NotificationSnackbar/> */}
			<HomeComponent />
		</div>
	);
}
