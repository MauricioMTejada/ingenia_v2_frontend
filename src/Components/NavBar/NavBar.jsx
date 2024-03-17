import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//material UI
import { AppBar, Box } from "@mui/material";
import { useTheme } from "@emotion/react";
//componente
import { ColorModeContext } from "../Layout";
import MenuAvatar from "./MenuAvatar";
import SearchBar from "./SearchBar";
import SingInButtons from "./SingInButtons";
import { LogoIngenia } from "./LogoIngenia";
import { Publicaciones } from "./Publicaciones";
import { Articulos } from "./Articulos";
import MisCursos from "./MisCursos";
import Favoritos from "./Favoritos";
import Carrito from "./Carrito";
import ThemeMode from "./ThemeMode";
//actions
import { getCourses } from "../../Redux/Actions/getCourses";
import { getCategories } from "../../Redux/Actions/getCategories";
import { postLocalStorage } from "../../Redux/Actions/actionsCarrito/postLocalStorage";
import { getToCarritoBd } from "../../Redux/Actions/getToCarritoBd";
import setActiveTab from "../../Redux/Actions/setActiveTab";
import { getArticulos } from "../../Redux/actionsProfileAdmin/getArticulos";
import { getFacturas } from "../../Redux/actionsProfileAdmin/getFacturas";
import { getInstructorUser } from "../../Redux/actionsProfileAdmin/getInstructorUser";
import { getIdCoursesuser } from "../../Redux/Actions/getIdCoursesuser";
import { getIdRatingCourses } from "../../Redux/Actions/getIdRatingCourses";
import { GetFavoritos } from "../../Redux/Actions/FavoritosActions/GetFavoritos";
// Estilos
import styles from "./NavBar.module.css";

export default function NavBar() {
	// Suscribo al estado global:
	const user = localStorage.getItem("idUser");
	const dispatch = useDispatch();
	const carrito = useSelector((state) => state.allCarrito);
	const favorite = useSelector((state) => state.favorites);
	const favoriteLength = favorite?.length;

	useEffect(() => {
		dispatch(getCourses());
		dispatch(getCategories());
		dispatch(getArticulos());
		dispatch(getFacturas());
		dispatch(getInstructorUser());
		dispatch(postLocalStorage());
		if (user) {
			dispatch(getIdCoursesuser(user));
			dispatch(GetFavoritos(user));
			dispatch(getIdRatingCourses(user));
			!carrito.length ? dispatch(getToCarritoBd(user)) : "nada";
		}
	}, [dispatch]);

	//Badge para el cart desde el navbar
	const cart = useSelector((state) => state.allCarrito);
	const cartCourses = cart.length;

	// userType de localStorage que se dejó de usar:
	let loginUser = { type: 0 };
	let userType = 0;

	//prevengo un dato "loginUser.userType = null"
	if (localStorage.getItem("userType") == null)
		localStorage.setItem("userType", "0");

	/*if (localStorage.getItem("myCourses") == null)
        localStorage.setItem("myCourses", "nada");*/

	if (localStorage.getItem("myRatingCourses") == null)
		localStorage.setItem("myRatingCourses", "0");

	// Consulto qué tipo de usuario está registrado
	if (localStorage.getItem("userType") != 0) {
		userType = parseInt(localStorage.getItem("userType"), 10);
	}

	// Modo Dark/Ligth
	const theme = useTheme();
	const colorMode = React.useContext(ColorModeContext);
	const themeMode = theme.palette.mode === "light" ? "black" : "white";
	const navbarClass =
		theme.palette.mode === "dark" ? styles.navbarDark : styles.navbarLight;

	// Estado del Tab en Cursos/Favoritos:
	const tabSet = (activeTab) => {
		dispatch(setActiveTab(activeTab));
	};

	return (
		<AppBar
			position="fixed"
			elevation={0}
			className={navbarClass}
			sx={{ bgcolor: "background.default" }}>
			<div className={styles.gridContainer}>
				<div className={styles.gitdItem01}>
					<LogoIngenia />
				</div>

				<div className={styles.gitdItem02}>
					<SearchBar />
				</div>

				{userType == 2 && (
					<div className={styles.gitdItem03}>
						<Publicaciones userType={userType} />
					</div>
				)}

				{userType == 2 && (
					<div className={styles.gitdItem04}>
						<Articulos userType={userType} />
					</div>
				)}

				{userType === 1 && (
					<div className={styles.gitdItem05}>
						<MisCursos tabSet={tabSet} />
					</div>
				)}
				{userType === 1 && (
					<Favoritos tabSet={tabSet} favoriteLength={favoriteLength} />
				)}

				{(userType == 0 || userType == 1) && (
					<Carrito userType={userType} cartCourses={cartCourses} />
				)}

				<ThemeMode theme={theme} colorMode={colorMode} />

				{(userType === 1 || userType === 2) && (
					<div className={styles.gitdItem09}>
						{" "}
						<MenuAvatar userType={userType} />{" "}
					</div>
				)}

				{userType === 0 && (
					<div className={styles.gitdItem10}>
						<SingInButtons themeMode={themeMode} />
					</div>
				)}

				{/* </div> */}
			</div>
		</AppBar>
	);
}
