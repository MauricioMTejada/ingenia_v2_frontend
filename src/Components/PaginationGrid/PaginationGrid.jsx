import * as React from 'react';
import { Box, Grid, Pagination, Stack } from '@mui/material';
import { useState } from 'react';
import CardHome from '../Card/CardHome'
import styles from './PaginationGrid.module.css'


export default function PaginationGrid({ arrayPag, visualize }) {
// arrayPag: Array que será paginado
// visualize: Cantidad de elementos a visualizar por página

    // Paginado:
      // Estado del número de página:
        const [pageCurrent, setPageCurrent] = useState(1);
      // Posición del Último elemento:
        const elementLast = pageCurrent * visualize;
      // Posición del Primer elemento:
        const elementFirst = elementLast - visualize;
      // Cantidad Total de elementos:
        const elementTotal = arrayPag.length
      // Cantidad Total de Páginas:
        const pageTotal = Math.ceil(elementTotal/visualize);
      // Arreglo de elementos a visualizar:
        const elemToDisplay = arrayPag.slice(elementFirst, elementLast);
      // Función para cambiar el estado de la página:
        const handlePageChange = (event, pageNumber) => {
          setPageCurrent(pageNumber);
        };

      // Para pruebas de desarrollo:
        /* console.log(` elementLast: ${elementLast}, elementFirst: ${elementFirst},
        elementTotal: ${elementTotal}, pageTotal: ${pageTotal},
        elemToDisplay:  ${elemToDisplay} visualize: ${visualize}
        pageCurrent: ${pageCurrent}` ); */

return (
    <div>

        {/* Renderizado de las tarjetas a visualizar */}
        <div className={styles.contentGrid}>
            {elemToDisplay.map((curso) => (
              <div className={styles.itemGrid} key={curso.idCourse}>
                <CardHome
                  key={curso.idCourse}
                  idCourse = {curso.idCourse}
                  title={curso.title}
                  lenguage={curso.lenguage}
                  image={curso.image}
                  instructorLastName={ curso.Users? curso.Users[0]?.name: curso.users[0]?.name }
                  instructorName={ curso.Users? curso.Users[0]?.lastname: curso.users[0]?.lastname }
                  price={curso.price}
                  habilities={curso.habilities}
                />
              </div>
            ))}
          </div>

        {/* Numeración de la Paginación (si hay más de una página) */}
        {pageTotal > 1 ?
        (<Pagination count={pageTotal}  page={pageCurrent} onChange={handlePageChange} color="primary"/>) : null}


    </div>
  );
}
