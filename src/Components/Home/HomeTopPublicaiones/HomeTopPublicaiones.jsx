import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import HomeCardComents from "./HomeCardComents";
import { TitleSection } from "../../../utils/TitleSection";

export default function HomeTopPublicaiones() {
	return (
		<Box
			// sx={{ width: "400px", marginRight: "70px" }}
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
			}}>

			<TitleSection title={"Top Publicaciones"} />

			<HomeCardComents />
		</Box>
	);
}
