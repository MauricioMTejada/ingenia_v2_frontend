import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import styles from "./Login.module.css";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import LoginToBackendGoogle from "../../Components/LoginToBackendGoogle/LoginToBackendGoogle";
import { LoginToBackendGoogleCount } from "../../Components/LoginToBackend/LoginToBackend";
import RequestDataCourses from "../../Components/RequestDataCourses/RequestDataCourses";
import { useDispatch } from "react-redux";

// Documentación de Firebase sobre el login de Google:
// https://firebase.google.com/docs/auth/web/google-signin?authuser=1&hl=es#web-modular-api

export const LoginGoogleButton = ({ userType }) => {

	//Provider de Google
	const provider = new GoogleAuthProvider();

    // dispatch
	const dispatch = useDispatch();

	//Iniciar sesión con Google
	const signInGoogle = () => {
        // console.log(type);
		const auth = getAuth();
		signInWithPopup(auth, provider)
			.then(async (result) => {
				const Login = await LoginToBackendGoogleCount(result, userType, dispatch);
				console.log(Login);

				if (Login.validate == false) {
					// Seteo el texto modal en su correspondiente estado:
					setTextModal({ title: "Inicio de Sesión", message: Login.message });
					// Abro la ventana modal
					setOpenModal(true);
				}

				if (Login.validate == true) {
					// console.log(Login);
					window.location.href = "/";
				}
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	return (
		<div className={styles.containerBottom}>
			<div className={styles.decoContainer}>
				<hr className={styles.line} />
				<span className={styles.decoration}>o</span>
				<hr className={styles.line} />
			</div>

			<Button
				variant="outlined"
				color="secondary"
				startIcon={<GoogleIcon />}
				sx={{ width: "280px", fontSize: "15px" }}
				onClick={() => signInGoogle()}>
				Continuar con Google
			</Button>

			<p className={styles.textBottom}>
				¿Aún no tienes una cuenta?
				<NavLink style={{ textDecoration: "none" }} to={`/${userType}`}>
					<span className={styles.textLink}> Regístrate</span>
				</NavLink>
			</p>
		</div>
	);
};
