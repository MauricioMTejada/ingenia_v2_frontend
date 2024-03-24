import React from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import PaymentIcon from "@mui/icons-material/Payment";
import { useSelector } from "react-redux";
import env from "../../env";
export default function Paypalbutton() {
	const totalpagar = useSelector((state) => state.totalCarrito);
	const idUser = localStorage.getItem("idUser");

	// console.log(idUser);
	// console.log(totalpagar);

	// console.log("Tipo de dato de idUser:", typeof idUser, idUser);
    // console.log("Tipo de dato de totalpagar:", typeof totalpagar, totalpagar);


	const handlePaymentSuccess = async () => {
		try {
			const response = await axios.post(
				`${env.VITE_HOST}/buy/?costo=${totalpagar}&idUser=${idUser}`
			);
			window.location.href = response.data.links[1].href;
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Button
			disabled
			variant="contained"
			color="primary"
			sx={{ color: "white", fontSize: 19, margin: "2rem 0", cursor: "not-allowed" }}
			onClick={handlePaymentSuccess}
			startIcon={<PaymentIcon sx={{ color: "white" }} />}>
			pagar con paypal
		</Button>
	);
}
