import React from "react";
import Typography from "@mui/material/Typography";
import { Card, CardContent, Divider, Stack } from "@mui/material";
import Paypalbutton from "../../PayPal/paypalbuton";
import { useSelector } from "react-redux";
import style from "./DetalleCompra.module.css";

export default function DetalleCompra() {
  const buton = useSelector((state) => state.ButtonPaypal);
  const totalpagar = useSelector((state) => state.totalCarrito.toFixed(2));
  // console.log(totalpagar);

  return (
    <Stack className={style.summary}>
      <Typography variant="h2" color="primary" className={style.title}>
        Resumen
      </Typography>

      <Card className={style.card}>
        <CardContent className={style.cardContent}>
          <Typography variant="h3" className={style.priceOriginal}>
            Precio Original:
          </Typography>
          <Typography variant="h4">${totalpagar} </Typography>
        </CardContent>
      </Card>

      <Card className={style.card}>
        <CardContent className={style.cardContent}>
        <Typography variant="h3" className={style.totalText}>
          Total:
        </Typography>
        <Typography variant="h4">${totalpagar} </Typography>
		</CardContent>
      </Card>

      <Typography variant="h5">
        Al completar la compra, aceptas estas Condiciones de uso.
      </Typography>

      {buton ? <Paypalbutton /> : ""}
    </Stack>
  );
}
