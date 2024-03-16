import { Box, Typography } from "@mui/material";
import Cards from "../../Card/Cards";
import { TitleSection } from "../../../utils/TitleSection";

export default function HomeTopVentas() {
	return (
		<Box >

			<TitleSection title={"Top Ventas"} />

			<Cards />

		</Box>
	);
}
