import React from "react";
import { Stack, Typography, FormControlLabel, Radio } from "@mui/material";
import { useDispatch } from "react-redux";
import { butonpaylap } from "../../Redux/Actions/butonpaypal";

export default function Formulario() {
	const dispatch = useDispatch();
	return (
		<Stack direction="column" alignItems="flex-start" spacing={3} sx={{ margin: '3rem 0'}}>
			<Typography variant="h5" color="primary">
				Método de Pago
			</Typography>
			<FormControlLabel
				value="1"
				label="paypal"
				control={<Radio />}
				onClick={() => dispatch(butonpaylap(true))}
			/>
		</Stack>
	);
}
