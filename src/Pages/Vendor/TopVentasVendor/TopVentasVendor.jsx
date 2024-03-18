import React from 'react'
import { Box, Typography } from '@mui/material'
import { CardsTopv } from './CardsTopv'

export const TopVentasVendor = () => {
    return (
        <Box
            sx={{
                // padding: '20px'
        }}
        >
            <Typography variant="h5" color="primary" align='left' marginBottom={5}>Cursos Registrados</Typography>
            <CardsTopv/>

        </Box>
    )
}
