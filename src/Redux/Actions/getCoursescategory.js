import axios from "axios";
import env from "../../../env";
// import { Category } from "@mui/icons-material";

export const GET_COURSESCATEGORY = "GET_COURSESCATEGORY";

export function getCoursesCategory(categoria) {
  // console.log(`categia: ${categoria}`);
  return async function (dispatch) {
    try {
      const response = await axios.get(`${env.VITE_HOST}/courses/`);
      const cursos = response.data;

      // console.log(cursos);

      const cursosFiltrados = cursos.filter((element) => {
        // console.log(element.Categories);
        return (
          element.Categories &&
          categoria && // Asegurarse de que categoria esté definido
          element.Categories.some((category) =>
              categoria.includes(category.name)
          )
      );
      });

      await dispatch({ type: GET_COURSESCATEGORY, payload: cursosFiltrados });
    } catch (error) {
      // Manejo de errores
      console.error(error);
    }
  };
}
