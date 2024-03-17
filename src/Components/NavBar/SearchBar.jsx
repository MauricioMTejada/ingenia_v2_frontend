import { InputAdornment, TextField, Button } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { getCoursesSearch } from "../../Redux/Actions/SerchcCourses";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
	const [searchString, setSearchString] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function handleChange(event) {
		event.preventDefault();
		setSearchString(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		dispatch(getCoursesSearch(searchString));
		navigate("/SerchCardResults");
	}

	function handleCLICK(event) {
		event.preventDefault();
		dispatch(getCoursesSearch(searchString));
		navigate("/SerchCardResults");
	}

	return (
		<>
			<form
				onChange={handleChange}
				onSubmit={handleSubmit}
				style={{ display: "flex", alignItems: "center" }}>
				<TextField
					id="search"
					label="Buscar"
					type="search"
					variant="outlined"
					size="small"
					sx={{
						minWidth: "200px",
						width: "400px",
						// width: {
						// sm: "200px",
						// md: "400px",
						// lg: "400px",
						// },
					}}
					InputProps={{
						endAdornment: (
							<InputAdornment position="start">
								<Button
									variant="text"
									color="primary"
									onClick={handleCLICK}
									style={{ padding: "0", minWidth: "24px", height: "24px" }}>
									<NavLink
										to="/SerchCardResults"
										style={{ color: "orange", lineHeight: "0px" }}>
										<SearchIcon />
									</NavLink>
								</Button>
							</InputAdornment>
						),
						style: {
							borderRadius: "40px",
							alignItems: "center",
							justifyContent: "center",
						},
					}}
				/>
			</form>
		</>
	);
}
