import { Box, Stack } from "@mui/material";
import React from "react";
import Formulario from "./Formulario";
import Detallesdelpedido from "./Detallesdelpedido";
import DetalleCompra from "./DetalleCompra";

export default function Pay() {
	return (
			<Stack
				direction="column"
				justifyContent="space-around"
				alignItems="flex-start"
				spacing={4}>

				<Box sx={{ width: "100%" }}>
					<DetalleCompra />
					<Formulario />
				</Box>

				<Box>
					<Detallesdelpedido />
				</Box>

			</Stack>
	);
}
