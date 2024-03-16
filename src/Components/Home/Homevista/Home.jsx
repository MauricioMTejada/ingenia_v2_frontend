import { Box, Typography } from "@mui/material";
import Carrusel from "../../Hero Section/HeroSection";
import styled from "./Home.module.css";
import HomeTopVentas from "../HomeTopVentas/HomeTopVentas";
import HomeTopPublicaiones from "../HomeTopPublicaiones/HomeTopPublicaiones";
import HomeRebajas from "../Home Rebajas/HomeRebajas";
import HomeMejorcalificados from "../HomeMejorcalificados/HomeMejorcalificados";
import HomeCategorias from "../HomeCategorias/HomeCategorias";
import { NavLink } from "react-router-dom";
import { HomeBanner } from "./HomeBanner";

export default function HomeComponent() {
	return (
		<div style={{ with: "100%" }}>
			<Carrusel />

			<HomeBanner />

			<div className={styled.homeSection}>
				<div className={styled.homeSectionItem1}>
					<HomeTopVentas />
				</div>
				<div className={styled.homeSectionItem2}>
					<HomeTopPublicaiones />
				</div>
			</div>

			<HomeRebajas />
			<HomeMejorcalificados />
			<HomeCategorias />
		</div>
	);
}
