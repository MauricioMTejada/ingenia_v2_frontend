import CardHome from "./CardHome";
import { Box, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import styles from "./CardsComponentLarge.module.css";

export default function CardsComponentLarge() {
	const curs = useSelector((state) => state.allCourse);
	const cursos = curs.slice(0, 8);

	return (
		<div>
			<div className={styles.contentGrid}>
				{cursos.map((curso) => (
					<div className={styles.itemGrid} key={curso.idCourse}>
						<CardHome
							idCourse={curso.idCourse}
							title={curso.title}
							lenguage={curso.lenguage}
							image={curso.image}
							instructorLastName={curso.Users[0]?.lastname}
							instructorName={curso.Users[0]?.name}
							price={curso.price}
							habilities={curso.habilities}
						/>
					</div>
				))}
			</div>
			{/* <Box style={{ padding: "32px" }}>
				<Grid container spacing={5}>
					{cursos.map((curso) => (
						<Grid item xs={3} sm={6} md={3} xl={3} key={curso.idCourse}>
							<CardHome
								idCourse={curso.idCourse}
								title={curso.title}
								lenguage={curso.lenguage}
								image={curso.image}
								instructorLastName={curso.Users[0]?.lastname}
								instructorName={curso.Users[0]?.name}
								price={curso.price}
								habilities={curso.habilities}
							/>
						</Grid>
					))}
				</Grid>
			</Box> */}
		</div>
	);
}
