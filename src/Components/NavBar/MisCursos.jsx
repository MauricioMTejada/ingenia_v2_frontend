import React from 'react';
import { NavLink } from 'react-router-dom';

const MisCursos = ({ tabSet }) => {
    return (
        <div style={{ margin: "0 2rem" }} >
        <NavLink
            style={{
                textDecoration: "none",
                color: "#FF8906",
                fontSize: "20px",
            }}
            to={"/MyCourses"}
            onClick={() => tabSet(0)}
        >
            <p style={{ margin: "0" }}>Mis cursos</p>
        </NavLink></div>
    );
};

export default MisCursos;
