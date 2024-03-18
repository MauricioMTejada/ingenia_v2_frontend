import { Box, Grid, Tab, Tabs, Typography } from "@mui/material"
import { CardVendedor } from "./CardVendedor"
import { TopVentasVendor } from "./TopVentasVendor/TopVentasVendor"
import { PublicacionesRecientes } from "./Publicaciones/PublicacionesRecientes"
import { useState } from "react"
import VendorArtículos from "../../Components/VendorViews/VendorArticulos/VendorArtículos"
import VendorValoraciones from "../../Components/VendorViews/VendorValoraciones/VendorValoraciones"
import VendorCursos from "../../Components/VendorViews/VendorCursos/VendorCursos"


export const VendedorPublico = () => {

  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
      setTabIndex(newTabIndex);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", maxWidth: "700px", margin: "0 auto" }}>
        <CardVendedor/>

        <Grid container style={{ padding: '30px', }}>

            <Grid item xs={6.5} >
              <TopVentasVendor/>
            </Grid>

            <Grid item xs={0} className="SegundoItem">
              <PublicacionesRecientes/>
            </Grid>

        </Grid>

        <div>
          <Box>
              <Tabs
                value={tabIndex}
                onChange={handleTabChange}
                centered
              >
              <Tab
                label="Cursos"
                sx={{ fontSize: "16px" }}
              />
              <Tab
                label="Artículos"
                sx={{ fontSize: "16px" }}
              />
              <Tab
                label="Valoraciones"
                sx={{ fontSize: "16px" }}
              />
              </Tabs>
              <Box sx={{ padding: 2 }}>
              {tabIndex === 0 && (
                <Box>
                  <p>Cursos</p>
                  <VendorCursos />
                </Box>
              )}
              {tabIndex === 1 && (
                <Box>
                  <p>Articulos</p>
                  <VendorArtículos />
                </Box>
              )}
               {tabIndex === 2 && (
                <Box>
                    <p>Valoraciones</p>
                    <VendorValoraciones />
                </Box>
              )}
              </Box>
          </Box>
        </div>
    </div>
  )
}
