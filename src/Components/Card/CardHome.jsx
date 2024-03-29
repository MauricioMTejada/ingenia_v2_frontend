import React from "react";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
	Alert,
	Snackbar,
	CardMedia,
	Typography,
	Rating,
	Fab,
} from "@mui/material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import styles from "./CardHome.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCarrito } from "../../Redux/Actions/actionsCarrito/addToCarrito";
import { RemoveOneFromCarrito } from "../../Redux/Actions/actionsCarrito/RemoveOneFromCarrito";
import { addToCarritoBd } from "../../Redux/Actions/addToCarritoBd";
import { RemoveToByBD } from "../../Redux/Actions/RemoveToByBD";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { deletFavoritosRedux } from "../../Redux/Actions/FavoritosActions/deletFavoritosRedux";
import { deletFavoritos } from "../../Redux/Actions/FavoritosActions/deletFavoritos";

function CardHome({
	title,
	image,
	instructorName,
	instructorLastName,
	price,
	lenguage,
	ratings = 5,
	idCourse,
}) {
	//prueba
	// const localStorageInfoUser = useSelector((state) => state.localStorageData);
	const userId = localStorage.getItem("idUser");

	// En la vista MisCursos, no se debe visualizar el precio y carrito. Se utiliza el siguiente estado:
	const tabIndex = useSelector((state) => state.setActiveTab);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	// Obtener el modo de tema del estado en Redux
	const themeMode = useSelector((state) => state.thmeMode);

	const [isActive, setIsActive] = useState(false);
	// const [colorCart, setcolorCart] = useState("");
	const [isAlertAdd, setIsAlertAdd] = useState(false);
	const [isAlertDelete, setIsAlertDelete] = useState(false);
	const [purchasedCourse, setPurchasedCourse] = React.useState(false);

	// Lógica para el cambio de color del carrito, según el modo de tema
	const colorCart = themeMode === "dark" ? "#FFFFFE" : "#000000";

	//Logica para el cambio de color del carrito, según si ha sido comprado
	useEffect(() => {

		// Consulto si el usuario ha comprado éste curso:
		let myCoursesString = localStorage.getItem("myCourses");
		let myCourses = myCoursesString
			? myCoursesString.split(",").map(Number)
			: [Number(myCoursesString)];
		//console.log("En CardHome");
		if (myCourses.includes(idCourse)) setPurchasedCourse(true);
	}, []);

	//Lógica para activado/desactivado del carrito
	const handleCart = () => {
		if (!isActive) {
			if (localStorage.getItem("name")) {
				setIsActive(true);
				setIsAlertAdd(true);
				dispatch(addToCarritoBd(idCourse, userId));
				dispatch(addToCarrito(idCourse));
			} else {
				navigate("/Login");
			}
		} else {
			setIsActive(false);
			setIsAlertDelete(true);
			dispatch(RemoveOneFromCarrito(idCourse));
			dispatch(RemoveToByBD(idCourse, userId));
		}
	};

	const handleFavoriteClick = () => {
		dispatch(deletFavoritosRedux(idCourse));
		dispatch(deletFavoritos(userId, idCourse));
	};

	return (
		<div className={styles.container}>
			{isAlertAdd && (
				<Snackbar
					open={isAlertAdd}
					autoHideDuration={2000}
					onClose={() => setIsAlertAdd(false)}>
					<Alert
						variant="filled"
						severity="info"
						icon={<InsertEmoticonIcon fontSize="inherit" />}>
						Has agregado un curso a tu carrito
					</Alert>
				</Snackbar>
			)}

			{isAlertDelete && (
				<Snackbar
					open={isAlertDelete}
					autoHideDuration={2000}
					onClose={() => setIsAlertDelete(false)}>
					<Alert
						variant="filled"
						severity="info"
						icon={<SentimentVeryDissatisfiedIcon fontSize="inherit" />}>
						Has eliminado un curso de tu carrito
					</Alert>
				</Snackbar>
			)}

			<div className={styles.gridContainer}>
				{/* Imagen */}
				<div className={styles.itemGridImage}>
					<NavLink
						// className={styles.imageCard}
						to={`/DetailCourse/${idCourse}`}
						style={{ textDecoration: "none" }}>
						{/* <CardMedia
						sx={{ width: "100%",
						// height: 180,
						borderRadius: "5px" }}
						component="img"
						image={image}
						title="xxxxx"
					/> */}
						<img src={image} alt="image" className={styles.imageCard} />
					</NavLink>
				</div>

				{/* Título - Instructor - Lenguaje */}
				<div className={styles.itemGridInfo}>
					<NavLink
						to={`/DetailCourse/${idCourse}`}
						style={{ textDecoration: "none" }}>
						<Typography
							align="left"
							gutterBottom
							color="primary"
							component="div"
							sx={{ fontWeight: 600, fontSize: "1.3rem" }}>
							{title}
						</Typography>
						<Typography variant="body2" color="text.secondary" align="left">
							Instructor: {instructorLastName} {instructorName}
						</Typography>
						<Typography variant="body2" color="text.secondary" align="left">
							Idioma: {lenguage}
						</Typography>
					</NavLink>
				</div>

				{/* Rating */}
				<div className={styles.itemGridRating}>
					<Typography variant="body2" sx={{ color: "#e91e63" }}>
						{ratings}
					</Typography>
					<Rating
						name="read-only"
						value={ratings}
						readOnly
						sx={{
							color: "#e91e63",
							marginLeft: "5px",
						}}
					/>
					<button onClick={handleCart} className={styles.button}>
						{!purchasedCourse &&
							(isActive ? (
								<ShoppingCartIcon color="secondary" sx={{ width: "20px" }} />
							) : (
								<ShoppingCartIcon
									sx={{ color: `${colorCart}`, width: "20px" }}
								/>
							))}
					</button>

					{tabIndex === 0 ? (
						<Typography></Typography>
					) : tabIndex === 1 ? (
						<Fab onClick={handleFavoriteClick} sx={{ background: "#E53170" }}>
							<FavoriteIcon />
						</Fab>
					) : (
						<Typography></Typography>
					)}
				</div>

				{/* Precio */}
				<div className={styles.itemGridPrice}>
					{!purchasedCourse && (
						<p className={styles.pricetag}> ${price} USD </p>
					)}
				</div>
				{/* </div> */}
			</div>
		</div>
	);
}

export default CardHome;
