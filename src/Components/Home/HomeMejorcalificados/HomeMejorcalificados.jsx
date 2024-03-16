import { Box, Typography } from "@mui/material";
import CardsComponentLarge from "../../Card/CardsComponentLarge";
import { TitleSection } from "../../../utils/TitleSection";

export default function HomeMejorcalificados() {
	return (
		<Box style={{ width: "100%" }}>

			<TitleSection title={"Mejor Calificados"} />

			<CardsComponentLarge />
		</Box>
	);
}
