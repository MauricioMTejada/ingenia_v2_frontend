import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Typography } from "@mui/material";
import { CardsCarr } from '../../Components/Carrito/CardsCarr';
import HomeRebajas from '../../Components/Home/Home Rebajas/HomeRebajas';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useEffect } from 'react';
import { totalcarrito } from '../../Redux/Actions/TotalCarrito';
import Total from './Total';



export default function Carrito() {
    const dispach=useDispatch()
    const car = useSelector((state)=>state.allCarrito)

    const sumar = car.reduce((accumulator, ele) => accumulator + ele.price, 0);
    useEffect(() => {
      dispach(totalcarrito(sumar))
    }, [sumar])


  return (
    // <Grid container spacing={2} margin={10}>
    <div>
        <Total total={sumar} />

        {/* <Grid item xs={9}> */}
        <div>
            <Typography
                align="left"
                marginBottom={3}
                color="primary"
                sx={{
                    fontWeight: "500",
                    fontSize: "36px",
                }}
            >
                Mi carrito
            </Typography>

            {sumar == 0?
                <Button color='secondary'>
                    <AddShoppingCartIcon size='large' sx={{color:'aqua'}} />
                    <Typography marginLeft={5}>
                        Tu cesta está vacía. ¡Sigue comprando para encontrar un curso!
                    </Typography>
                </Button>
                :<CardsCarr/>}


            <Typography align="left" variant="h5" marginTop={20}>
                Sugerencias para tí
            </Typography>

            <HomeRebajas/>
        </div>

    </div>

  );
}