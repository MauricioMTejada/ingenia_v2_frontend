import { NavLink, useNavigate } from "react-router-dom"
import FormRegisterUsuario from "../../Components/FormRegister/FormRegisterUsuario.jsx"
import { auth } from "../../firebase/config";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import signupGoogle from "./signupGoogle";

import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import styles from "./SignupUsuario.module.css"

export default function SignupUsuario() {

  const navigate = useNavigate();


  //Provider de Google
  const provider = new GoogleAuthProvider();

  //Registrarse con Google
  // const signInGoogle = () => {
  //   signInWithPopup(auth, provider)
  //   .then((result) => {
  //     signupGoogle(result, "SignupUsuario")
  //     navigate("/")
  //   }).catch((error) => {
  //     console.log(error.message)
  //   });
  // }

  	//Iniciar sesión con Google
	const signInGoogle = () => {
      // console.log(type);
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then(async (result) => {
      const Login = await signupGoogle(result, "SignupUsuario");

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
    <div className={styles.container}>
      <p className={styles.title}> Registrate y comienza</p>
      <div>
        <FormRegisterUsuario />

        <p className={styles.disclaimer}>
          Al registrarte,
          <NavLink
            to={"/Terms"}
            style={{ textDecoration: 'none' }}
          >
            <span className={styles.textLink}> condiciones de uso y nuestra Política de privacidad.</span>
          </NavLink>
        </p>
      </div>
      <div className={styles.decoContainer}>
          <hr className={styles.line}/>
          <span className={styles.decoration}>o</span>
          <hr className={styles.line}/>
      </div>
      <Button
          variant="outlined"
          color="secondary"
          startIcon={<GoogleIcon />}
          sx={{ width: "280px", fontSize: "15px" }}
          onClick={signInGoogle}
      >
          Continuar con Google
      </Button>
      <p className={styles.textBottom}>
        ¿Ya tienes una cuenta?
        <NavLink
          to={"/Login"}
          style={{ textDecoration: 'none' }}
        >
          <span className={styles.textLink}> Inicia Sesión</span>
        </NavLink>
      </p>
    </div>
  )
}
