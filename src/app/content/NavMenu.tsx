// app/components/NavMenu.js
import React from 'react';
import { Box, Typography, Link as MuiLink } from '@mui/material';

export default function NavMenu() {
    return (
        <Box
            component="nav"
            sx={{
                width: '200px',
                position: 'sticky',
                top: '20px',
                maxHeight: 'calc(100vh - 40px)', // Begrens høyden
                overflowY: 'auto', // Aktiver skroll om nødvendig
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                pr: 2, // padding for litt luft på høyresiden
            }}
        >
            <Typography variant="h6" sx={{ mb: 2 }}>Navigasjon</Typography>
            <MuiLink href="#experience" color="inherit" underline="none">
                Erfaring
            </MuiLink>
            <MuiLink href="#education" color="inherit" underline="none">
                Utdanning
            </MuiLink>
            <MuiLink href="#projects" color="inherit" underline="none">
                prosjekt
            </MuiLink>
        </Box>
    );
}
