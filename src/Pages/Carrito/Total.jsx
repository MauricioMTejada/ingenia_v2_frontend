import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import style from './styleCarrito.module.css';

function Total({ total }) {

    const userType = localStorage.getItem("userType");

    return (
        <div
        className={style.totalContainer}
        >
            <Card>
                <CardContent className={style.cardContent}>
            <Typography variant="h3" align="left">Total</Typography>
            <Typography variant="h4" align="left" marginY={2}>
               $ {total.toLocaleString()} USD
            </Typography>
            {userType !== 0 ? (
                <NavLink to={"/Pay"} exact={true.toString()}>
                    <Button variant="contained" size="large">Pagar</Button>
                </NavLink>
            ) : (
                <NavLink to={"/Login"} exact={true.toString()}>
                    <Button variant="contained" size="large">Pagar</Button>
                </NavLink>
            )}</CardContent>
            </Card>
        </div>
    );
}

export default Total;
