import React from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterCoursesCategory } from "../../../Redux/Actions/filterCoursesCategory";
import { getCoursesCategory } from "../../../Redux/Actions/getCoursescategory";
import styles from './HomeCategorias.module.css'
import { TitleSection } from "../../../utils/TitleSection";
export default function HomeCategorias() {
	const dispatch = useDispatch();
	const categorias = useSelector((state) => state.categories);

	const handledispach = (categori) => {
		dispatch(filterCoursesCategory(categori.idCategory));
		dispatch(getCoursesCategory([categori.name]));
	};

	return (
		<Box style={{ width: "100%" }}>
			<TitleSection title="Categorías"/>

			<div className={styles.contentGrid}>
				{categorias.map((categoria) => (
						<div className={styles.itemGrid}
						key={categoria.idCategory}>
							<Link to="/CategoryCourses">
								<Button
									onClick={() => handledispach(categoria)}
									variant="contained"
									color="secondary"
									sx={{ width: "100%", height: 60 }}
									>
									{categoria.name}
								</Button>
							</Link>
						</div>
					))}
			</div>


		</Box>
	);
}
