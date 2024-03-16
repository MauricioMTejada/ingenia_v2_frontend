import { Box, Typography } from "@mui/material";
import { CardHomeRebajas } from "./CardHomeRebajas";
import { TitleSection } from "../../../utils/TitleSection";
// import CardsComponentLarge from '../../Card/CardsComponentLarge'

export default function HomeRebajas() {
	return (
		<Box style={{ width: "100%" }}>

			<TitleSection title={"Rebajas"} />

			<CardHomeRebajas />
		</Box>
	);
}
