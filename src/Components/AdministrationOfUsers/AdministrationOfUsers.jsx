import { useTheme } from "@emotion/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ColorModeContext } from "../Layout";

export const AdministrationOfUsers = () => {
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

	// Tipos de Usuario
	// userType = 0 => usuario no registrado
	// userType = 1 => usuario Comprador
	// userType = 2 => usuario Vendedor
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

	// // Modo Dark/Ligth
	// const theme = useTheme();
	// const colorMode = React.useContext(ColorModeContext);
	// const themeMode = theme.palette.mode === "light" ? "black" : "white";

	// Estado del Tab en Cursos/Favoritos:
	const tabSet = (activeTab) => {
		dispatch(setActiveTab(activeTab));
	};

	return <div>AdministrationOfUsers</div>;
};
