import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, Grid, Rating } from "@mui/material";
import Fab from "@mui/material/Fab";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RemoveOneFromCarrito } from "../../Redux/Actions/actionsCarrito/RemoveOneFromCarrito";
import { RemoveToByBD } from "../../Redux/Actions/RemoveToByBD";
import style from "./CardCarrito.module.css";

export function CardCarrito({
	title,
	description,
	dificulty,
	price,
	image,
	instructorName,
	lenguage,
	instructorLastName,
	categories,
	idCourse,
}) {
	const dispatch = useDispatch();
	const userId = localStorage.getItem("idUser");

	function handClickDelete() {
		dispatch(RemoveOneFromCarrito(idCourse));
		dispatch(RemoveToByBD(idCourse, userId));
	}

	return (
		<Card
			// sx={{
			// 	display: "flex",
			// 	alignItems: "center",
			// }}
            className={style.container}
            >
			<Link to={`/DetailCourse/${idCourse}`}>
				<CardMedia
					sx={{ width: 400, aspectRatio: "16/9", padding: "1rem" }}
					component="img"
					image={image}
				/>
			</Link>

			<CardContent>
				<Grid
					container
					spacing={1}
					direction="column"
					justifyContent="flex-start"
					alignItems="flex-start"
					padding={2}>
					<Grid>
						<Typography
							gutterBottom
							variant="h3"
							component="div"
							sx={{
								textAlign: "left",
							}}>
							{title}
						</Typography>

						<Typography
							gutterBottom
							variant="h5"
							component="div"
							sx={{
								textAlign: "left",
								marginBottom: "2rem",
							}}>
							{description}
						</Typography>
					</Grid>

					<div
						// container
						// direction="row"
						// justifyContent="flex-start"
						// alignItems="flex-start"
						style={{ display: "flex", flexDirection: "column", width: "100%" }}>
						<Typography
							variant="h6"
							color="text.Primary"
							sx={{
								textAlign: "justify",
								padding: "1rem 0 1rem 0",
								width: "100%",
							}}>
							Por: {instructorName} {instructorLastName}
						</Typography>

						{/* <Typography gutterBottom variant="h7" component="div" sx={{
                            textAlign: 'justify'

                            }}>
                              {dificulty}
                            </Typography> */}

						<div className={style.infoAccesorie}>
							<Rating
								name="half-rating"
								size="large"
								defaultValue={2.5}
								precision={0.5}
								color="#E53170"
							/>

							<Button
								onClick={handClickDelete}
								variant="contained"
								startIcon={<DeleteIcon />}>
								delete
							</Button>
						</div>

						<div className={style.infoAccesorie}>
							<Fab disabled aria-label="like">
								<FavoriteIcon />
							</Fab>
							<div>
								<Box component="h2">$ {price} USD</Box>
							</div>
						</div>
					</div>

					<Grid
						// width={600}
						// container
						// direction="row"
						// justifyContent="flex-start"
						// alignItems="normal"
                        className={style.containerButtons}
                        >
						<Grid>
							<Button
								variant="text"
								sx={{ backgroundColor: "#E53170", color: "black" }}>
								{" "}
								{dificulty}{" "}
							</Button>
						</Grid>
						<Grid marginX={1}>
							<Button
								// marginLeft="2"
								sx={{ backgroundColor: "#E53170", color: "black" }}>
								{" "}
								{lenguage}{" "}
							</Button>
						</Grid>
						<Grid>
							<Button
								variant="text"
								sx={{ backgroundColor: "#E53170", color: "black" }}>
								{" "}
								{categories}{" "}
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
}
