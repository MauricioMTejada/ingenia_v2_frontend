import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { validationSign } from "./validations";
import { Alert, Snackbar }from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import LoginToBackendOwnAccess from "../LoginToBackendOwnAccess/LoginToBackendOwnAccess";
import styles from "./FormLogin.module.css";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import RequestDataCourses from "../RequestDataCourses/RequestDataCourses";
import RequestRatingUserCourses from "../RequestRatingUserCourses/RequestRatingUserCourses";
import { getIdCoursesuser } from "../../Redux/Actions/getIdCoursesuser";
import { getIdRatingCourses } from "../../Redux/Actions/getIdRatingCourses";
import { LoginToBackendIngeniaCount } from "../LoginToBackend/LoginToBackend";

export const DATA_LOGIN = "DATA_LOGIN";

export default function FormLogin({ userType }) {

  // Hooks
    const dispatch = useDispatch();
      const navigate = useNavigate();


  // Estados
    const [isAlert, setIsAlert] = useState(false);
      const [openModal, setOpenModal] = useState(false);
        const [textModal, setTextModal] = useState({title: "", message: ""})
          const [errors, setErrors] = useState({password: "", email: "",});
            const [user, setUser] = useState({
              userType: "",
              password: "",
              email: "",
              });


  // Submit
    const handleSubmit = async (event) => {
      event.preventDefault();

      if(user.email === "ingenia.info2023@gmail.com" && user.password === "1234Admin"){
        user.type === "INSTRUCTOR"
        navigate("/ProfileAdmin")
      }

      const Login = await LoginToBackendIngeniaCount(user, dispatch)

      if (Login.validate == false) {
        // Seteo el texto modal en su correspondiente estado:
          setTextModal({title: "Inicio de Sesión", message: Login.message})
        // Abro la ventana modal
          setOpenModal(true);
      }

      if (Login.validate == true) {
        // console.log(Login);
        window.location.href = "/";
      }

    };


  //Detecta cambios de los input input
    const handleInput = (event) => {
      const { name, value } = event.target;
      console.log(event.target.value);

      setUser({...user, userType, [name]: value,});

      setErrors(
        validationSign({
          ...user,
          [name]: value,
        })
      );
    };


  // Renderizado
    return (
      <>

        {isAlert && (
          <Snackbar
            open={isAlert}
            autoHideDuration={2000}
            onClose={() => setIsAlert(false)}
          >
            <Alert variant="filled" severity="success">
              Inicio de Sesión Satisfactorio
            </Alert>
          </Snackbar>
        )}

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo Electrónico"
            name="email"
            value={user.email}
            onChange={handleInput}
            className={styles.input}
            autoComplete="username"
          />
          {errors.email && (
            <p className={styles.error}>
              <ErrorOutlineIcon
                sx={{
                  width: "15px",
                  marginRight: "5px",
                  marginBottom: "-7px",
                }}
              />
              {errors.email}
            </p>
          )}
          <div>
            <input
              type="password"
              placeholder="Contraseña"
              name="password"
              value={user.password}
              onChange={handleInput}
              className={styles.input}
              autoComplete="current-password"
            />
            {errors.password && (
              <p className={styles.errorPass}>
                <ErrorOutlineIcon
                  sx={{
                    width: "15px",
                    marginRight: "5px",
                    marginBottom: "-7px",
                  }}
                />
                {errors.password}
              </p>
            )}
            <NavLink style={{ textDecoration: "none" }} to={"/ResetPassword"}>
              <p className={styles.textLegend}>Olvide mi contraseña</p>
            </NavLink>
          </div>
          {Object.entries(errors).length === 0 ? (
            <button className={styles.button} type="submit">
              <span className={styles.button_text}>Iniciar Sesión</span>
            </button>
          ) : (
            <button className={styles.buttonOff} disabled>
              <span className={styles.button_text}>Iniciar Sesión</span>
            </button>
          )}
        </form>

        {/* Ventana Modal */}
          {openModal && <ModalWindow textModal={textModal} onClose={() => setOpenModal(false)}/>}
      </>
    );
}